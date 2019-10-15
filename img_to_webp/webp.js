var webp         = require('webp-converter'),
		glob         = require('glob');

glob("../app/img/*.{png,jpg,jpeg}", function (er, files) {
  files.forEach(file => {
  	webp.cwebp(file,file.replace(/\.[^/.]+$/, "")+".webp","-q 90",function(error)
	  {
	  	console.log(error);
	  });
  });
})
