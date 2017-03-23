var buf = new Buffer(256);
len = buf.write("www.test.com");
console.log("write to " + len);
