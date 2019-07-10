const { Readable } = require('stream');
const readableStream = new Readable({
    read(size) {
        setTimeout(() => {
            if (this.currentCharCode > 90) {
                this.push(null);
                return;
            }

            this.push(String.fromCharCode(this.currentCharCode++));
        }, 100);
    }
});

readableStream.currentCharCode = 65;
readableStream.pipe(process.stdout);