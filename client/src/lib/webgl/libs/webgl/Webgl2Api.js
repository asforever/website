export default class Webgl2Api {
    //content
    static createWebglContext(canvas, option) {
        return canvas.getContext('webgl2', option);
    }

    //shader source
    static loaderShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    //program
    static createProgram(gl, vsSource, fsSource) {
        const vertexShader = this.loaderShader(gl, gl.VERTEX_SHADER, vsSource);
        const fragmentShader = this.loaderShader(gl, gl.FRAGMENT_SHADER, fsSource);
        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);
        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            gl.deleteProgram(shaderProgram);
            console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
            return null;
        }
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        return shaderProgram;
    }

    static createUniformsInfo(gl, program) {
        let numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        let uniformsInfo = [];
        for (let ii = 0; ii < numUniforms; ++ii) {
            let uniformInfo = gl.getActiveUniform(program, ii);
            if (!uniformInfo) {
                break;
            }
            uniformsInfo.push(uniformInfo);
        }
        return uniformsInfo;
    }

    static createAttributesInfo(gl, program) {
        let numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
        let attributesInfo = [];
        for (let ii = 0; ii < numAttribs; ++ii) {
            let attributeInfo = gl.getActiveAttrib(program, ii);
            if (!attributeInfo) {
                break;
            }
            attributesInfo.push(attributeInfo);
        }

        return attributesInfo;

    }

    static createProgramInfo(gl, vsSource, fsSource) {
        const program = this.createProgram(gl, vsSource, fsSource);
        const uniformsInfo = this.createUniformsInfo(gl, program);
        const attributesInfo = this.createAttributesInfo(gl, program);
        return {
            program: program,
            uniformsInfo: uniformsInfo,
            attributesInfo: attributesInfo,
        };
    }







}
