import { Server, Model, hasMany, belongsTo, RestSerializer } from "miragejs"

let ApplicationSerializer = RestSerializer.extend()
  
export const makeServer = ({ environment = 'test' }) => new Server({
    environment,

    models: {
        board: Model.extend({
            todos: hasMany(),
        }),
        todo: Model.extend({
            board: belongsTo(),
        })
    },

    serializers: {
        application: ApplicationSerializer,
        board: ApplicationSerializer.extend({
          include: ["todos"],
        }),
    },

    routes() {
      this.namespace = "api"

      this.get("/boards")
    },

    seeds(server) {
        server.create("board", { name: "Matierials" , todos: [server.create("todo", { name: 'Concourse'})]})
        server.create("board", { name: "Backlog" , todos: [
            server.create("todo", { name: 'Assets pipelines'}),
            server.create("todo", { name: 'UI Service'}),
            server.create("todo", { name: 'Make first implementation of concourse/pulumi/scripts of virtual env pipeline.'}),
            server.create("todo", { name: 'Implementing a pulumi resource type for concourse.'}),
            server.create("todo", { name: 'make pulumi package for concourse'}),
        ]})
        server.create("board", { name: "To Do" , todos: [
            server.create("todo", { name: 'Make diagrams for all current infrastructure.'}),
            server.create("todo", {name : 'Create Blue/Green deployment pipeline for offers ui service.'})
        ]})
        server.create("board", { name: "Doing" , todos: [
            server.create("todo", { name: 'Creating an ECS Infrastructure for Offers UI service with Fargate.'})
        ]})
        server.create("board", { name: "Done" , todos: []})
     },
  });