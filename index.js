// Framerate:	60 frames per second
// CPU:	ByteByteJump with 3-byte addresses
// CPU speed:	65536 instructions per frame (3932160 instructions per second, ~3.93 MHz).
// Byte ordering:	Big-endian
// Memory:	16 MiB RAM
// Graphics:	256*256 pixels, 1 byte per pixel, 216 fixed colors
// Sound:	8-bit mono, signed values. 256 samples per frame (15360 samples per second)
// Keyboard:	16 keys, organized into 4 rows by 4 columns


// class Memory {
//     constructor() {
//         this.memory = new Uint8Array(0x1000008);
//     }

//     fetch24(addr) {
//         return this.memory[addr]<<16 | this.memory[addr+1]<<8 | this.memory[addry+2];
//     }

//     set24() {
        
//     }

//     getPC() {
//         return this.fetch24(2);
//     }

//     setPC() {

//     }
// }

// class CPU {
//     constructor(memory) {
//         this.memory = memory;
//         this.pc = memory.getPC();
//     }

//     fetch() {
//         this.pc = memory.getPC();
//         return ins = this.memory[pc];
//     }

//     execute(ins) {

//     }
// }

const fileSelector = document.getElementById('file-selector');
const ctx = document.getElementById('canvas').getContext("2d");
const imgData = ctx.getImageData(0,0,256, 256);

fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
    const reader = new FileReader();
    reader.addEventListener('load', (e) => {
        console.log(e.target.result);
        imgData.data.set(new Uint8ClampedArray(e.target.result));
        ctx.putImageData(imgData,0,0);
    });
    reader.readAsArrayBuffer(fileList[0]);
});

