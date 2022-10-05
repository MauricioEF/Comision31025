module.exports = {
  apps: [
    {
      name: "forkeada1",
      script: "src/app2.js",
      env:{
        PORT:8080
      },
      watch:true,
    },
    {
      name:"forkeada2",
      script: "src/app2.js",
      env:{
        PORT:8081
      },
      watch:true,
    },
    {
      name:"clusterizado",
      script: "src/app2.js",
      env:{
        PORT:8082
      },
      exec_mode:'cluster',
      node_args:"--harmony",
      instances:8,
      watch:true
    }
  ]
}
