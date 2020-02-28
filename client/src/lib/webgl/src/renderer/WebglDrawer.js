import GlslBuilder from "../shaderLib/GlslBuilder";

export default class WebglDrawer {
    static create(webglState) {
        let webglDrawer = new WebglDrawer();
        webglDrawer.webglState = webglState;
        return webglDrawer;
    }

    constructor() {
        this.webglState = null;
        this.webglList = null;
    }

    useRenderTarget(renderTarget) {
        const state = this.webglState;
        if (!renderTarget) {
            state.unBindFrameBuffer();
            state.unBindRenderBuffer();
            return null;
        }
        const textureData = renderTarget.texture;
        const renderTargetId = renderTarget.id;
        const frameBuffer = state.getFrameBufferById(renderTargetId) || state.createFrameBuffer(renderTargetId);
        const depthTexture = state.getTexture2DById(textureData.id) || state.createTexture2D(textureData);
        state.updateTexture2D(depthTexture, textureData);
        state.updateFrameTexture(frameBuffer, depthTexture, renderTarget);

        state.optionDepthTest(true);
        state.clearDepth();
    }

    useWebglList(webglList) {
        this.webglList = webglList;
    }

    draw() {
        this.updateProgram();
        this.updateVao();
        this.updateUniforms();
        this.updateCap();
        this.webglState.drawElements(this.webglList.vertexLength);
    }

    updateProgram() {
        const {webglState, webglList} = this;
        const glslBuilder = new GlslBuilder();
        glslBuilder.loadData(webglList.getGlslData());

        const programId = webglList.getProgramId();

        let programInfo = webglState.getProgramInfoById(programId);
        if (!programInfo) {
            const source = glslBuilder.get();
            programInfo = this.webglState.createProgramInfo(programId, source.vs, source.fs);
        }
        webglState.useProgramInfo(programInfo);
    }

    //vao
    updateVao() {
        const {webglState, webglList} = this;
        let needsUpdate = webglList.needsUpdateAttributes;
        let vaoId = webglList.attributesId;

        const vao = webglState.getVaoById(vaoId) || webglState.createVao(vaoId);
        if (needsUpdate) {
            webglList.needsUpdateAttributes = false;
            webglState.updateVao(vao, webglList.attributes, webglList.indices);
        }
        webglState.useVao(vao);
    }

    //uniforms
    updateUniforms() {
        this.webglState.updateUniforms(this.webglList.uniforms);
    }

    updateCap() {
        const {webglState} = this;
        webglState.optionDepthTest(true);
        webglState.optionCullFace(this.webglList.cullFaceType)
    }

    viewport(x, y, w, h) {
        this.webglState.viewport(0, 0, w, h);
    }

}
