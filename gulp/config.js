var dest = "./app";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },
  less: {
    src: src + "/less/*.less",
    files: src + "/less/**/**",
    dest: dest + "/css",
    plugins: [],
    settings: {
    }
  },
  jade: {
    src: src + "/jade/*.jade",
    files: [src + "/jade/**/**", src + "/assets/data.json"],
    data: src + "/assets/data.json",
    dest: dest
  },
  images: {
    src: src + "/img/**",
    dest: dest + "/img"
  },
  // markup: {
  //   src: src + "/htdocs/**",
  //   dest: dest
  // },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    //extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/js/app.js',
      dest: dest + '/js',
      outputName: 'app.js'
    }]
  },
  assets: {
    files: src + '/assets/**',
    bundleConfigs: [{
      src: src + '/assets/fonts/**',
      dest: dest + '/fonts'
    }]
  }
};