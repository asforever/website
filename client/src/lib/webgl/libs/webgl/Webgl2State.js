import Webgl2Api from "./Webgl2Api";
import GlslConst from "./GlslConst";
import WebglContextConst from "./WebglContextConst";

export default class Webgl2State {
    static create(canvas, option = {}) {
        const contextOption = {};
        contextOption.alpha = option.alpha !== undefined ? option.alpha : false;
        contextOption.depth = option.depth !== undefined ? option.depth : true;
        contextOption.stencil = option.stencil !== undefined ? option.stencil : true;
        contextOption.antialias = option.antialias !== undefined ? option.antialias : false;
        contextOption.premultipliedAlpha = option.premultipliedAlpha !== undefined ? option.premultipliedAlpha : true;
        contextOption.preserveDrawingBuffer = option.preserveDrawingBuffer !== undefined ? option.preserveDrawingBuffer : false;
        contextOption.powerPreference = option.powerPreference !== undefined ? option.powerPreference : 'default';

        let state = new Webgl2State();
        state.gl = Webgl2Api.createWebglContext(canvas, contextOption);
        return state;
    }

    constructor() {
        this.gl = null;
        this.textures = {};
        this.programInfos = {};
        this.vaos = {};
        this.framebuffers = {};
        this.renderbuffers = {};
        this.caps = {};

        this.curProgramInfo = null;
    }

    //program
    createProgramInfo(id, vs, fs) {
        return this.programInfos[id] = Webgl2Api.createProgramInfo(this.gl, vs, fs);
    }

    useProgramInfo(programInfo) {
        this.gl.useProgram(programInfo.program);
        this.curProgramInfo = programInfo;
    }

    getProgramInfoById(id) {
        return this.programInfos[id];
    }

    //vao
    createVao(id) {
        return this.vaos[id] = this.gl.createVertexArray();
    }

    getVaoById(id) {
        return this.vaos[id];
    }

    useVao(vao) {
        this.gl.bindVertexArray(vao);
    }

    updateVao(vao, attributes, indices) {
        let gl = this.gl;
        gl.bindVertexArray(vao);
        const buffers = [];
        Object.values(attributes).forEach((attribute, key) => {
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, attribute.data, gl.STATIC_DRAW);
            gl.vertexAttribPointer(key, attribute.componentL, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(key);
            buffers.push(buffer);
        });

        if (indices) {
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices.data, gl.STATIC_DRAW);
            buffers.push(buffer);
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);

        buffers.forEach(buffer => {
            gl.deleteBuffer(buffer);
        });
        return vao;
    }

    //uniforms
    updateUniforms(uniformsData) {
        let {uniformsInfo, program} = this.curProgramInfo;
        let textureUint = 0;
        uniformsInfo.forEach(webglActiveInfo => {
            let {name} = webglActiveInfo;
            let {data, type} = uniformsData[name];
            if (type === GlslConst.SAMPLER_2D) {
                let texture = this.textures[data.id] || this.createTexture2D(data);
                this.updateTexture2D(texture, data);
                this.set_texture(program, name, texture, textureUint);
                textureUint++;
            } else if (type === GlslConst.SAMPLER_CUBE) {

            } else {
                let funcKey = `set_${type}`;
                if (this[funcKey]) {
                    this[funcKey](program, name, data);
                }
            }
        });
    }


    //renderTarget
    createFrameBuffer(id) {
        return this.framebuffers[id] = this.gl.createFramebuffer();
    }

    getFrameBufferById(id) {
        return this.framebuffers[id];
    }

    updateFrameTexture(frameBuffer, texture, renderTarget) {
        let gl = this.gl;
        let {frameBufferTarget, frameBufferAttachment} = renderTarget;
        gl.bindFramebuffer(frameBufferTarget, frameBuffer);
        if (texture) {
            gl.framebufferTexture2D(frameBufferTarget, frameBufferAttachment, gl.TEXTURE_2D, texture, 0);
        }
        let status = gl.checkFramebufferStatus(frameBufferTarget);
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            console.log('fb status: ' + status.toString(16));
        }
    }


    unBindFrameBuffer(target = WebglContextConst.FRAMEBUFFER) {
        this.gl.bindFramebuffer(target, null);
    }

    unBindRenderBuffer(target = WebglContextConst.RENDERBUFFER) {
        this.gl.bindRenderbuffer(target, null);
    }


    createRenderBuffer(id) {
        return this.renderbuffers[id] = this.gl.createRenderbuffer();
    }

    getRenderBuffer(id) {
        return this.renderbuffers[id];
    }

    bindRenderFrameBuffer(frameBuffer, renderBuffer, renderTarget) {
        let {
            width, height, frameBufferTarget, frameBufferAttachment,
            renderBufferTarget, renderBufferAttachment
        } = renderTarget;

        let gl = this.gl;
        gl.bindFramebuffer(frameBufferTarget, frameBuffer);
        gl.bindRenderbuffer(renderBufferTarget, renderBuffer);
        gl.renderbufferStorage(renderBufferTarget, renderBufferAttachment, width, height);
        gl.framebufferRenderbuffer(frameBufferTarget, frameBufferAttachment, gl.RENDERBUFFER, renderBuffer);
    }

    //texture
    createTexture2D(data) {
        return this.createTexture(data);
    }

    createTexture(data, isCubeTexture) {
        let {id, wrapS, wrapT, minFilter, maxFilter} = data;
        let gl = this.gl;

        const texType = !isCubeTexture ? gl.TEXTURE_2D : gl.TEXTURE_CUBE_MAP;
        const texture = gl.createTexture();

        gl.bindTexture(texType, texture);
        gl.texParameteri(texType, gl.TEXTURE_WRAP_S, wrapS);
        gl.texParameteri(texType, gl.TEXTURE_WRAP_T, wrapT);
        gl.texParameteri(texType, gl.TEXTURE_MIN_FILTER, minFilter);
        gl.texParameteri(texType, gl.TEXTURE_MAG_FILTER, maxFilter);
        if (isCubeTexture) gl.texParameteri(texType, gl.TEXTURE_WRAP_R, gl.CLAMP_TO_EDGE); //need webgl 2.0
        this.textures[id] = texture;
        return texture;
    }

    getTexture2DById(id) {
        return this.textures[id];
    }

    copyTexture(textureBuffer, target, texTarget,
                level = 0, internalFormat, x = 0, y = 0,
                width = 512, height = 512, border = 0) {
        const gl = this.gl;
        const resultInternalFormat = gl.RGBA;
        gl.bindTexture(target, textureBuffer);
        gl.copyTexImage2D(texTarget, level, resultInternalFormat, x, y, width, height, border);
    }

    updateTexture2D(texture, data) {
        if (!data.needsUpdate) return;
        data.needsUpdate = false;

        let {levels, internalFormat, width, height, border, format, type, image, useMipMap} = data;

        const gl = this.gl;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        if (width && height) {
            gl.texImage2D(gl.TEXTURE_2D, levels, internalFormat, width, height, border, format, type, image);
        } else {
            gl.texImage2D(gl.TEXTURE_2D, levels, internalFormat, format, type, image);
        }
        if (useMipMap) gl.generateMipmap(gl.TEXTURE_2D);
    }


    updateTextureCube(texture, data) {
        let {levels, internalFormat, width, height, format, type} = data;

        let gl = this.gl;
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
        if (width > -1 && height > -1) {
            for (let i = 0; i < 6; ++i) {
                gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, levels, internalFormat, width, height, 0, format, type, imageArr[i] || null);
            }
        } else {
            for (let i = 0; i < 6; ++i) {
                gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, levels, internalFormat, format, type, imageArr[i]);
            }
        }
        if (levels > 0 && width > -1 && height > -1) gl.texStorage2D(gl.TEXTURE_CUBE_MAP, levels, internalFormat, width, height);
    }

    useTexture2D(textureBuffer, uint = 0) {
        const gl = this.gl;
        gl.activeTexture(gl.TEXTURE0 + uint);
        gl.bindTexture(gl.TEXTURE_2D, textureBuffer);
    }

    useTextureCube(textureBuffer, uint = 0) {
        const gl = this.gl;
        gl.activeTexture(gl.TEXTURE0 + uint);
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, textureBuffer);
    }

    //update uniform
    set_texture(program, location, texture, uint, isCubeTexture = false) {
        let gl = this.gl;

        let target = isCubeTexture ? gl.TEXTURE_CUBE_MAP : gl.TEXTURE_2D;
        const uniformLocation = gl.getUniformLocation(program, location);
        gl.uniform1i(uniformLocation, uint);
        gl.activeTexture(gl.TEXTURE0 + uint);
        gl.bindTexture(target, texture);
    }

    set_int(program, location, num) {
        let gl = this.gl;
        const uniformLocation = gl.getUniformLocation(program, location);
        gl.uniform1i(uniformLocation, num);
    }

    set_float(program, location, floatNum) {
        let gl = this.gl;
        const uniformLocation = gl.getUniformLocation(program, location);
        gl.uniform1f(uniformLocation, floatNum);
    }

    set_vec2(program, location, data) {
        let gl = this.gl;
        const uniformLocation = gl.getUniformLocation(program, location);
        gl.uniform2fv(uniformLocation, data);
    }

    set_vec3(program, location, data) {
        let gl = this.gl;
        const uniformLocation = gl.getUniformLocation(program, location);
        gl.uniform3fv(uniformLocation, data);
    }

    set_vec4(program, location, data) {
        let gl = this.gl;
        const uniformLocation = gl.getUniformLocation(program, location);
        gl.uniform4fv(uniformLocation, data);
    }

    set_mat3(program, location, mat3) {
        let gl = this.gl;
        const uniformLocation = gl.getUniformLocation(program, location);
        gl.uniformMatrix3fv(uniformLocation, false, mat3);
    }

    set_mat4(program, location, mat4) {
        let gl = this.gl;
        const uniformLocation = gl.getUniformLocation(program, location);
        gl.uniformMatrix4fv(uniformLocation, false, mat4);
    }

    //draw
    drawElements(vertexLength) {
        let gl = this.gl;
        const type = gl.UNSIGNED_SHORT;
        const offset = 0;
        gl.drawElements(gl.TRIANGLES, vertexLength, type, offset);
    }

    drawArray(vertexLength) {
        let gl = this.gl;
        const type = gl.TRIANGLES;
        const offset = 0;
        gl.drawArrays(type, offset, vertexLength);
    }

    //viewport
    viewport(x, y, width, height) {
        this.gl.viewport(x, y, width, height);
    }

    //caps
    optionDepthTest(bool) {
        let gl = this.gl;
        if (bool) {
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL);
        } else {
            gl.disable(gl.DEPTH_TEST);
        }
    }

    optionCullFace(cullType) {
        let gl = this.gl;
        if (cullType) {
            gl.enable(gl.CULL_FACE);
            gl.cullFace(cullType);
        } else {
            gl.disable(gl.CULL_FACE);
        }
    }

    //clear
    setClearColor(r, g, b, a) {
        this.gl.clearColor(r, g, b, a);
    }

    clear(clearCode) {
        this.gl.clear(clearCode);
    }

    clearDepth() {
        this.gl.clear(this.gl.DEPTH_BUFFER_BIT);
    }

    clearBufferfv(clearCode) {
        this.gl.clearBufferfv(clearCode, 0, [0.3, 0.3, 0.3, 1.0]);
    }

    //dispose
    deleteShader(shader) {
        this.gl.deleteShader(shader);
    }

    deleteVao(vao) {
        this.gl.deleteVertexArray(vao);
    }

    disposeContext() {
        this.gl.getExtension('WEBGL_lose_context').loseContext();
    }

    deleteProgram(program) {
        this.gl.deleteProgram(program);
    }

    deleteBuffer(buffer) {
        this.gl.deleteBuffer(buffer);
    }

    deleteTexture(textureBuffer) {
        this.gl.deleteTexture(textureBuffer);
    }

    deleteShader(shader) {
        this.gl.deleteShader(shader);
    }

    deleteFramebuffer(gl, frameBuffer) {
        this.gl.deleteFramebuffer(frameBuffer);
    }

    deleteRenderbuffer(renderBuffer) {
        this.gl.deleteRenderbuffer(renderBuffer);
    }

}
