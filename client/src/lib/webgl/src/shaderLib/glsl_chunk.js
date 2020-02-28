const chunks = {
    common_vert_params:
        "uniform mat4 projection;\n" +
        "uniform mat4 model;\n" +
        "uniform mat4 view;\n" +
        "layout (location = 0) in vec3 aPosition;\n\n",
    common_vert:
        "vec4 worldPosition = model * vec4(aPosition,1.); \n\n",

    common_vert_end:
        "gl_Position = projection  * view * worldPosition; \n\n",

    common_frag_params:
        "#define PI 3.141592653589793\n" +
        "uniform vec4 diffuse;\n" +
        "uniform vec4 specular;\n" +
        "out vec4 FragColor; \n\n",
    common_frag:
        "vec4 ambientColor = vec4(0.0);\n" +
        "float shadow = 0.;\n" +
        "vec4 resultColor = vec4(0.0);\n" +
        "vec4 diffColor = diffuse;\n" +
        "vec4 specularColor = specular;\n",

    common_frag_end:
        "FragColor = ambientColor + (1. - shadow) * resultColor;\n\n",

    map_vert_params:
        "#ifdef USE_MAP\n" +
        "layout (location = 2)  in vec2 aUv;\n" +
        "out vec2 vUv;\n" +
        "#endif \n\n",

    map_vert:
        "#ifdef USE_MAP\n" +
        "vUv = aUv;\n" +
        "#endif \n\n",

    map_frag_params:
        "#ifdef USE_MAP\n" +
        "in vec2 vUv;\n" +
        "#endif \n\n",

    diff_map_frag_params:
        "#ifdef USE_DIFF_MAP\n" +
        "uniform sampler2D diffuseMap;\n" +
        "#endif \n\n",

    diff_map_frag:
        "#ifdef USE_DIFF_MAP\n" +
        "diffColor *= texture(diffuseMap,vUv);\n" +
        "#endif \n\n",

    specular_map_frag_params:
        "#ifdef USE_SPECULAR_MAP\n" +
        "uniform sampler2D specularMap;\n" +
        "#endif \n\n",

    specular_map_frag:
        "#ifdef USE_SPECULAR_MAP\n" +
        "specularColor = texture(specularMap,vUv);\n" +
        "#endif \n\n",

    light_vert_params:
        "#ifdef USE_LIGHT\n" +
        "layout (location = 1)  in vec3 aNormal;\n" +
        "out vec3 vNormal;\n" +
        "out vec3 vPosition;\n" +
        "uniform mat3 normalMatrix ;\n" +
        "#endif \n\n",
    light_vert:
        "#ifdef USE_LIGHT\n" +
        "vNormal = normalMatrix * aNormal;\n" +
        "vPosition = vec3(model * vec4(aPosition,1.));\n" +
        "#endif \n\n",

    light_frag_params:
        "#ifdef USE_LIGHT\n" +
        "in vec3 vNormal;\n" +
        "in vec3 vPosition;\n" +
        "uniform vec3 eye;\n" +
        "uniform float shininess;\n" +
        "#endif \n\n",

    light_frag:
        "#ifdef USE_LIGHT\n" +
        "vec3 viewDir = normalize(eye - vPosition);\n" +
        "#endif \n\n",

    point_light_frag_params:
        "#ifdef POINT_LIGHT_NUM\n" +
        "struct PointLight {\n" +
        "  float constant;\n" +
        "  float linear;\n" +
        "  float quadratic;\n" +
        "  float intensity;\n" +
        "  vec3 position;\n" +
        "  vec4 diffuse;\n" +
        "  vec4 specular;\n" +
        "};\n" +
        "uniform PointLight pointLights[POINT_LIGHT_NUM]; \n" +
        "vec4 calcPointLight( \n" +
        "                   PointLight pointLights[POINT_LIGHT_NUM]\n" +
        "                   ,vec3 viewDir\n" +
        "                   ,vec3 vNormal\n" +
        "                   ,vec3 vPosition\n" +
        "                   ,vec4 diffuse\n" +
        "                   ,vec4 specular\n" +
        "                   ,float shininess){\n" +
        "   vec4 resultColor = vec4(0.);\n" +
        "   for(int i=0;i<POINT_LIGHT_NUM ;i++){\n" +
        "         PointLight light = pointLights[i];\n" +
        "         vec3 posToLight = light.position - vPosition;\n" +
        "         float distance = length(posToLight);\n" +
        "         vec3 lightDir = normalize(posToLight);\n" +
        "         float diff = max(dot(vNormal,lightDir),0.0);\n" +
        "         vec3 reflectDir = reflect(-lightDir, vNormal);\n" +
        "         float spec = pow(max(dot(viewDir, reflectDir), 0.0), shininess);\n" +
        "         float attenuation = 1.0 / (light.constant + light.linear * distance+ light.quadratic * (distance * distance));\n" +
        "         diffuse  =  diff * light.diffuse * diffuse;\n" +
        "         specular =  spec * light.specular * specular;\n" +
        "         resultColor = (diffuse + specular)* attenuation * light.intensity;\n" +
        "   }\n" +
        "   return resultColor; \n" +
        "} \n" +
        "#endif \n\n",
    point_light_frag: "" +
        "#ifdef POINT_LIGHT_NUM \n" +
        "   resultColor += calcPointLight(pointLights,viewDir,vNormal,vPosition,diffColor,specularColor,shininess); \n" +
        "#endif \n\n",

    spot_light_frag_params:
        "#ifdef SPOT_LIGHT_NUM\n" +
        "struct SpotLight {\n" +
        "  float constant;\n" +
        "  float linear;\n" +
        "  float quadratic;\n" +
        "  float intensity;\n" +
        "  vec3 position;\n" +
        "  vec3 dir;\n" +
        "  vec4 cutOff;\n" +
        "  vec4 outerCutOff;\n" +
        "  vec4 diffuse;\n" +
        "  vec4 specular;\n" +
        "};\n" +
        "uniform SpotLight spotLights[SPOT_LIGHT_NUM]; \n" +
        "vec4 calcSpotLight( \n" +
        "                   SpotLight spotLights[SPOT_LIGHT_NUM]\n" +
        "                   ,vec3 viewDir\n" +
        "                   ,vec3 vNormal\n" +
        "                   ,vec3 vPosition\n" +
        "                   ,vec4 diffuse\n" +
        "                   ,vec4 specular\n" +
        "                   ,float shininess){\n" +
        "   vec4 resultColor = vec4(0.);\n" +
        "   for(int i=0;i<POINT_LIGHT_NUM ;i++){\n" +
        "         SpotLight light = spotLights[i];\n" +
        "         vec3 posToLight = light.position - vPosition;\n" +
        "         float distance = length(posToLight);\n" +
        "         vec3 lightDir = normalize(posToLight);\n" +
        "         float diff = max(dot(vNormal,lightDir),0.0);\n" +
        "         vec3 reflectDir = reflect(-lightDir, vNormal);\n" +
        "         float spec = pow(max(dot(viewDir, reflectDir), 0.0), shininess);\n" +
        "         float attenuation = 1.0 / (light.constant + light.linear * distance+ light.quadratic * (distance * distance));\n" +

        "         float theta = dot(lightDir, normalize(-light.dir));\n" +
        "         float epsilon = light.cutOff - light.outerCutOff;\n" +
        "         float intensity = clamp((theta - light.outerCutOff) / epsilon, 0.0, 1.0);\n" +

        "         diffuse  =  diff * light.diffuse * diffuse;\n" +
        "         specular =  spec * light.specular * specular;\n" +
        "         resultColor += (diffuse + specular)* attenuation * intensity * light.intensity;\n" +
        "   }\n" +
        "   return resultColor; \n" +
        "} \n" +
        "#endif \n\n",
    spot_light_frag: "" +
        "#ifdef SPOT_LIGHT_NUM \n" +
        "   resultColor += calcSpotLight(spotLights,viewDir,vNormal,vPosition,diffColor,specularColor,shininess); \n" +
        "#endif \n\n",

    directional_light_frag_params:
        "#ifdef DIRECTIONAL_LIGHT_NUM\n" +
        "struct DirectionalLight {\n" +
        "  vec4 diffuse;\n" +
        "  vec4 specular;\n" +
        "  vec3 dir;\n" +
        "  float intensity;\n" +
        "};\n" +
        "uniform DirectionalLight directionalLights[DIRECTIONAL_LIGHT_NUM]; \n" +
        "vec4 calcDirectionalLight( \n" +
        "                   DirectionalLight directionalLights[DIRECTIONAL_LIGHT_NUM]\n" +
        "                   ,vec3 viewDir\n" +
        "                   ,vec3 vNormal\n" +
        "                   ,vec4 diffuse\n" +
        "                   ,vec4 specular\n" +
        "                   ,float shininess){\n" +
        "   vec4 resultColor = vec4(0.);\n" +
        "   for(int i=0;i<DIRECTIONAL_LIGHT_NUM ;i++){\n" +
        "         DirectionalLight light = directionalLights[i];\n" +
        "         vec3 lightDir = normalize(-light.dir);\n" +
        "         vec3 reflectDir = reflect(-lightDir, vNormal);\n" +
        "         float diff = max(dot(vNormal,lightDir),0.0);\n" +
        "         float spec = pow(max(dot(viewDir, reflectDir), 0.0), shininess);\n" +
        "         diffuse =  diff * light.diffuse * diffuse;\n" +
        "         specular =  spec * light.specular * specular;\n" +
        "         resultColor += (diffuse + specular) * light.intensity;\n" +
        "   }\n" +
        "   return resultColor; \n" +
        "} \n" +
        "#endif \n\n",
    directional_light_frag: "" +
        "#ifdef DIRECTIONAL_LIGHT_NUM \n" +
        "   resultColor += calcDirectionalLight(directionalLights,viewDir,vNormal,diffColor,specularColor,shininess); \n" +
        "#endif \n\n",

    ambient_light_frag_params:
        "#ifdef AMBIENT_LIGHT_NUM\n" +
        "struct AmbientLight {\n" +
        "  vec4 diffuse;\n" +
        "  float intensity;\n" +
        "};\n" +
        "uniform AmbientLight ambientLights[AMBIENT_LIGHT_NUM]; \n" +
        "vec4 calcAmbientLight( \n" +
        "                   AmbientLight ambientLights[AMBIENT_LIGHT_NUM]\n" +
        "                   ,vec4 diffuse){\n" +
        "   vec4 resultColor = vec4(0.);\n" +
        "   for(int i=0;i<AMBIENT_LIGHT_NUM ;i++){\n" +
        "         AmbientLight light = ambientLights[i];\n" +
        "         resultColor += light.diffuse * light.intensity * diffuse;\n" +
        "   }\n" +
        "   return resultColor; \n" +
        "} \n" +
        "#endif \n\n",
    ambient_light_frag: "" +
        "#ifdef AMBIENT_LIGHT_NUM \n" +
        "   ambientColor = calcAmbientLight(ambientLights,diffColor); \n" +
        "#endif \n\n",

    directionalLight_shadow_vert_params:
        "#ifdef DIRECTIONAL_LIGHT_SHADOW \n" +
        "out vec4 fragPosDirLightSpace;\n" +
        "uniform mat4 dirLightProjView;\n" +
        "#endif \n\n",

    directionalLight_shadow_vert:
        "#ifdef DIRECTIONAL_LIGHT_SHADOW \n" +
        "fragPosDirLightSpace = dirLightProjView * worldPosition;\n" +
        "#endif \n\n",

    directionalLight_shadow_frag_params:
        "#ifdef DIRECTIONAL_LIGHT_SHADOW \n" +
        "uniform sampler2D directionalShadowMap;" +
        "in vec4 fragPosDirLightSpace;\n" +
        "float shadowCalculation(){\n" +
        "   vec3 projCoords = fragPosDirLightSpace.xyz/fragPosDirLightSpace.w;\n" +
        "   projCoords = projCoords * 0.5 + 0.5;\n" +
        "   float closestDepth = texture(directionalShadowMap, projCoords.xy).r;\n" +
        "   float currentDepth = projCoords.z;\n" +
        "   float shadow = currentDepth - 0.005 > closestDepth  ? 1.0 : 0.0;\n" +
        "   return shadow;\n" +
        "}\n" +
        "#endif \n\n",

    directionalLight_shadow_frag:
        "#ifdef DIRECTIONAL_LIGHT_SHADOW\n" +
        "shadow = shadowCalculation();\n" +
        "#endif \n\n",
    base_material_vs:
        "#include <common_vert_params>" +
        "void main(){\n" +
        "   #include <common_vert>" +
        "   #include <common_vert_end>" +
        "}\n",

    base_material_fs:
        "#include <common_frag_params>" +
        "void main(){ \n " +
        "   #include <common_frag>" +
        "}\n",

    phong_material_vs:
        "#include <common_vert_params>" +
        "#include <light_vert_params>" +
        "#include <map_vert_params>" +
        "#include <directionalLight_shadow_vert_params>" +
        "void main(){\n" +
        "   #include <common_vert>" +
        "   #include <light_vert>" +
        "   #include <map_vert>" +
        "   #include <directionalLight_shadow_vert>" +
        "   #include <common_vert_end>" +
        "}\n",

    phong_material_fs:
        "#include <common_frag_params>" +
        "#include <map_frag_params>" +
        "#include <diff_map_frag_params>" +
        "#include <specular_map_frag_params>" +
        "#include <light_frag_params>" +
        "#include <ambient_light_frag_params>" +
        "#include <directional_light_frag_params>" +
        "#include <point_light_frag_params>" +
        "#include <spot_light_frag_params>" +
        "#include <directionalLight_shadow_frag_params>" +
        "void main(){ \n " +
        "   #include <common_frag>" +
        "   #include <diff_map_frag>" +
        "   #include <specular_map_frag>" +
        "   #include <light_frag>" +
        "   #include <ambient_light_frag>" +
        "   #include <directional_light_frag>" +
        "   #include <point_light_frag>" +
        "   #include <spot_light_frag>" +
        "#include <directionalLight_shadow_frag>" +
        "   #include <common_frag_end>" +
        "}\n",

    depth_material_vs:
        "#include <common_vert_params>" +
        "void main(){\n" +
        "   #include <common_vert>" +
        "   #include <common_vert_end>" +
        "}\n",

    depth_material_fs:
        "void main(){ \n " +
        "}\n",
};

function resolveIncludes(string) {
    return string.replace(/#include +<([\w\d./]+)>/gm, (m, key) => {
        let piece = chunks[key];
        if (string === undefined) {
            throw new Error('Can not resolve #include <' + key + '>');
        }
        return piece
    });

}

function preCompiler(chunks) {
    for (let key in chunks) {
        if (chunks.hasOwnProperty(key)) {
            let chunk = chunks[key];
            chunk.vertexShader = resolveIncludes(chunk.vertexShader);
            chunk.fragmentShader = resolveIncludes(chunk.fragmentShader);
        }
    }
}

const MaterialTypes = {
    BASE: "base",
    PHONG: "phong",
    DEPTH: "depth",
};

const GlslDefines = {
    USE_MAP: "USE_MAP",
    USE_DIFF_MAP: "USE_DIFF_MAP",

    USE_LIGHT: "USE_LIGHT",
    AMBIENT_LIGHT_NUM: "AMBIENT_LIGHT_NUM",
    DIRECTIONAL_LIGHT_NUM: "DIRECTIONAL_LIGHT_NUM",
    POINT_LIGHT_NUM: "POINT_LIGHT_NUM",
    SPOT_LIGHT_NUM: "SPOT_LIGHT_NUM",
};

const GlslVar = {
    DIFFUSE: "diffuse",
    DIFFUSE_MAP: "diffuseMap",
    SPECULAR: "specular",
    SPECULAR_MAP: "specularMap",
    DIRECTIONAL_SHADOW_MAP: "directionalShadowMap",
    DIRECTIONAL_LIGHT_PROJ_VIEW: "dirLightProjView",
    POINT_SHADOW_MAP: "pointShadowMap",
    SHININESS: "shininess",
//matrix
    PROJECTION: "projection",
    VIEW: "view",
    MODEL: "model",
    NORMAL_MATRIX: "normalMatrix",

//attribute
    POSITION: "position",
    NORMAL: "normal",
    UV: "uv",
    INDEX: "index",
//cons,
    VIEW_DIR: 'view_dir',
    RESULT: 'result',
    FRAG_COLOR: 'FragColor',
    GL_POSITION: 'gl_Position',

    EYE: "eye",
    AMBIENT_LIGHTS: "pointLights",
    DIRECTIONAL_LIGHTS: "pointLights",
    POINT_LIGHTS: "pointLights",
    SPOT: "pointLights",
};

const ShaderSource = {
    [MaterialTypes.BASE]: {
        vertexShader: chunks.base_material_vs,
        fragmentShader: chunks.base_material_fs,
    },
    [MaterialTypes.PHONG]: {
        vertexShader: chunks.phong_material_vs,
        fragmentShader: chunks.phong_material_fs,
    },
    [MaterialTypes.DEPTH]: {
        vertexShader: chunks.depth_material_vs,
        fragmentShader: chunks.depth_material_fs,
    }
};

preCompiler(ShaderSource);
export {ShaderSource, GlslDefines, GlslVar, MaterialTypes};
