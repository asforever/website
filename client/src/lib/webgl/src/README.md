
const scene = Scene.Create();
const renderer = Renderer.Create();

const importer = Importer.Create();

const rootNode = scene.GetRootNode();

const boxNode = BoxNode.Create();

rootNode.addChild(boxNode);

//const boxAttribute = boxNode.GetAttribute();
//const translation = rootNode.Translation.Get(); 

renderer.render(scene);


//
(nodes,camera,lights)->pipe(renderer,renderState)->(uniforms,attributes,vs,fs)
