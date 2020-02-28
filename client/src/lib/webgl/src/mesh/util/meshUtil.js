let box = (length = 1, width = 1, height = 1) => {
    const halfLength = length / 2 || this.length / 2;
    const halfWidth = width / 2 || this.width / 2;
    const halfHeight = height / 2 || this.height / 2;

    const LBF = [-halfWidth, -halfHeight, halfLength];//左下前
    const RBF = [halfWidth, -halfHeight, halfLength]; //右下前
    const RTF = [halfWidth, halfHeight, halfLength];  //右上前
    const LTF = [-halfWidth, halfHeight, halfLength]; //左上前

    const LBB = [-halfWidth, -halfHeight, -halfLength];//左下后
    const RBB = [halfWidth, -halfHeight, -halfLength];//右下后
    const RTB = [halfWidth, halfHeight, -halfLength];//右上后
    const LTB = [-halfWidth, halfHeight, -halfLength];//左上后


    const position = [
        ...LBF, ...RBF, ...RTF, ...LTF,      // Front face
        ...LBB, ...LTB, ...RTB, ...RBB,     // Back face
        ...LTF, ...RTF, ...RTB, ...LTB,     // Top face
        ...LBF, ...LBB, ...RBB, ...RBF,     // Bottom face
        ...RBF, ...RBB, ...RTB, ...RTF,     // Right face
        ...LBF, ...LTF, ...LTB, ...LBB,     // Left face
    ];
    const normal = [
        // Front
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,

        // Back
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,

        // Top
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,

        // Bottom
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,

        // Right
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,

        // Left
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0
    ];
    const uv = [
        // Front
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        // Back
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        // Top
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        // Bottom
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        // Right
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
        // Left
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
    ];

    return {
        position,
        uv,
        normal,
        indices: [
            0, 1, 2, 0, 2, 3,    // front
            4, 5, 6, 4, 6, 7,    // back
            8, 9, 10, 8, 10, 11,   // top
            12, 13, 14, 12, 14, 15,   // bottom
            16, 17, 18, 16, 18, 19,   // right
            20, 21, 22, 20, 22, 23,   // left
        ]
    };
};

let plane = (length = 2, width = 2) => {
    const halfLength = length / 2 || this.length / 2;
    const halfWidth = width / 2 || this.width / 2;

    let position = [
        -halfWidth, 0, halfLength,
        halfWidth, 0, halfLength,
        halfWidth, 0, -halfLength,
        -halfWidth, 0, -halfLength,
    ];
    let normal = [
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
    ];
    let uv = [
        0, 0,
        1, 0,
        1, 1,
        0, 1
    ];
    let indices = [
        0, 1, 2,
        0, 2, 3,
    ];

    return {
        position,
        uv,
        normal,
        indices,
    };
};

export {box, plane};
