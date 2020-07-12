module.exports = {
    hooks: {
      readPackage (pkg) {
        switch (pkg.name) {
          case 'favicons-webpack-plugin':
            pkg.dependencies['favicons'] = '^6.1.0'
            break
        }
        return pkg
      }
    }
  }