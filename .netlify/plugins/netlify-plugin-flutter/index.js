module.exports = {
    onPreBuild: async ({ utils: { run } }) => {
      await run.command('git clone https://github.com/flutter/flutter.git -b stable --depth 1')
      process.env.PATH = process.env.PATH + ':' + process.cwd() + '/flutter/bin'
      await run.command('flutter precache')
      await run.command('flutter doctor')
    },
  }