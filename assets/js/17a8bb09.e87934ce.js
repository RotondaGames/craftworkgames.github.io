"use strict";(self.webpackChunkmonogame_extended_website=self.webpackChunkmonogame_extended_website||[]).push([[4493],{8866:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(4848),s=t(8453);const r={id:"entities",title:"Entities",sidebar_label:"Entities",description:"High performance, Artemis based, Entity Component System (ECS)"},a=void 0,o={id:"features/entities/entities",title:"Entities",description:"High performance, Artemis based, Entity Component System (ECS)",source:"@site/docs/features/entities/entities.md",sourceDirName:"features/entities",slug:"/features/entities/",permalink:"/docs/features/entities/",draft:!1,unlisted:!1,editUrl:"https://github.com/craftworkgames/craftworkgames.github.io/tree/develop/docs/features/entities/entities.md",tags:[],version:"current",frontMatter:{id:"entities",title:"Entities",sidebar_label:"Entities",description:"High performance, Artemis based, Entity Component System (ECS)"},sidebar:"docs",previous:{title:"ContentReader",permalink:"/docs/features/content-extensions/contentReader"},next:{title:"Particles",permalink:"/docs/features/particles/"}},c={},d=[{value:"What is an ECS?",id:"what-is-an-ecs",level:2},{value:"Components",id:"components",level:3},{value:"Entities",id:"entities",level:3},{value:"Systems",id:"systems",level:3},{value:"Creating the world",id:"creating-the-world",level:2},{value:"Creating entities",id:"creating-entities",level:2},{value:"Destroying entities",id:"destroying-entities",level:2},{value:"Types of systems",id:"types-of-systems",level:2},{value:"Creating systems",id:"creating-systems",level:2},{value:"Accessing components",id:"accessing-components",level:2},{value:"Filtering components",id:"filtering-components",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"Not up to date",type:"warning",children:(0,i.jsxs)(n.p,{children:["This page ",(0,i.jsx)(n.strong,{children:"is not"})," up to date for MonoGame.Extended ",(0,i.jsx)(n.code,{children:"4.0.3"}),".  If you would like to contribute to updating this document, please ",(0,i.jsx)(n.a,{href:"https://github.com/craftworkgames/craftworkgames.github.io/pulls",children:"create a new PR"})]})}),"\n",(0,i.jsx)(n.p,{children:"The Entities package is a modern high performance Artemis based Entity Component System. Many of the features found in this implementation were inspired by artemis-odb. Although, many others were also studied during development. As you'll see the systems are designed to feel familar to MonoGame developers."}),"\n",(0,i.jsx)(n.h2,{id:"what-is-an-ecs",children:"What is an ECS?"}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"https://www.gamedev.net/articles/programming/general-and-gameplay-programming/understanding-component-entity-systems-r3013",children:"Entity Component System (ECS)"})," is a way to build and manage the entities (or game objects) in your game by composing their component parts together. An ECS consists of three main parts:"]}),"\n",(0,i.jsx)(n.h3,{id:"components",children:"Components"}),"\n",(0,i.jsx)(n.p,{children:"A component is simply a class that holds some state about the entity. Typically, components are lightweight and don't contain any game logic. It's common to have components with only a few properties or fields. Components can be more complex but inheritence is not encouraged."}),"\n",(0,i.jsx)(n.h3,{id:"entities",children:"Entities"}),"\n",(0,i.jsx)(n.p,{children:"An entity is a composition of components identified by an ID. Often you only need the ID of the entity to work with it. For performance reasons, and entity ID is only valid while the entity is alive. Once the entity is destroyed, it's ID may be recycled."}),"\n",(0,i.jsx)(n.h3,{id:"systems",children:"Systems"}),"\n",(0,i.jsxs)(n.p,{children:["A system is a class that will run during the game's ",(0,i.jsx)(n.code,{children:"Update"})," or ",(0,i.jsx)(n.code,{children:"Draw"})," calls. They usually contain the game logic about how to manage a filtered collection of entities and their components."]}),"\n",(0,i.jsx)(n.h2,{id:"creating-the-world",children:"Creating the world"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"World"})," is the entry point to the ECS. It holds your entities and systems and you'll use it later to create and destroy entities."]}),"\n",(0,i.jsxs)(n.p,{children:["To create the world you need to use the ",(0,i.jsx)(n.code,{children:"WorldBuilder"})," and add your systems before building the ",(0,i.jsx)(n.code,{children:"World"})," instance."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"_world = new WorldBuilder()\n    .AddSystem(new PlayerSystem())\n    .AddSystem(new RenderSystem(GraphicsDevice))\n    .Build();\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Note:"})," Manually adding your systems this way might seem annoying at first, but it can be highly desireable to be able to control the order systems are added. It also allows you to constructor inject services as desired."]}),"\n",(0,i.jsxs)(n.p,{children:["Once the world is created you need to call the ",(0,i.jsx)(n.code,{children:"Update"})," and ",(0,i.jsx)(n.code,{children:"Draw"})," methods."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"protected override void Update(GameTime gameTime)\n{\n    _world.Update(gameTime);\n    base.Update(gameTime);\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"protected override void Draw(GameTime gameTime)\n{\n    _world.Draw(gameTime);\n    base.Draw(gameTime);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Note:"})," The world also implements the ",(0,i.jsx)(n.code,{children:"IGameComponent"})," interface, so if you prefer you can add it to the ",(0,i.jsx)(n.code,{children:"GameComponentCollection"})," instead (not to be confused with ECS components)."]}),"\n",(0,i.jsx)(n.h2,{id:"creating-entities",children:"Creating entities"}),"\n",(0,i.jsx)(n.p,{children:"Usually when you create an entity you'll want to attach some components to it immediately. This is not required though, as components can be added and removed anytime by systems."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"var entity = _world.CreateEntity();\nentity.Attach(new Transform2(position));\nentity.Attach(new Sprite(textureRegion));\n"})}),"\n",(0,i.jsx)(n.p,{children:"Any standard class can be used as a component but typically you'll want to keep your components lightweight and specific."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Note:"})," An entity can only have one instance of each component type."]}),"\n",(0,i.jsx)(n.h2,{id:"destroying-entities",children:"Destroying entities"}),"\n",(0,i.jsx)(n.p,{children:"Removing entities from the world is easy."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"_world.DestroyEntity(entity);\n"})}),"\n",(0,i.jsx)(n.p,{children:"It should be noted that the actual entity creation and removal is deferred until the next update. This allows for some performance optimizations and batches events so that they can be handled more gracefully by systems."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Note:"})," When you're inside an ",(0,i.jsx)(n.code,{children:"EntitySystem"})," there are helper methods for creating destroying entities so that you don't need to access the ",(0,i.jsx)(n.code,{children:"World"})," instance each time."]}),"\n",(0,i.jsx)(n.h2,{id:"types-of-systems",children:"Types of systems"}),"\n",(0,i.jsx)(n.p,{children:"Systems can be used to do all kinds of processing during your game. There are several kinds of base systems available to build your game."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["An ",(0,i.jsx)(n.code,{children:"UpdateSystem"})," is a basic system that has an ",(0,i.jsx)(n.code,{children:"Update"})," method called every frame."]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.code,{children:"DrawSystem"})," is a basic system that has a ",(0,i.jsx)(n.code,{children:"Draw"})," method called every frame."]}),"\n",(0,i.jsxs)(n.li,{children:["An ",(0,i.jsx)(n.code,{children:"EntityUpdateSystem"})," is used to process a filtered collection of entities during the ",(0,i.jsx)(n.code,{children:"Update"})," call."]}),"\n",(0,i.jsxs)(n.li,{children:["An ",(0,i.jsx)(n.code,{children:"EntityDrawSystem"})," is used to process a filtered collection of entities during the ",(0,i.jsx)(n.code,{children:"Draw"})," call."]}),"\n",(0,i.jsxs)(n.li,{children:["An ",(0,i.jsx)(n.code,{children:"EntityProcessingSystem"})," can be used to process a filtered collection of entities one at a time during the ",(0,i.jsx)(n.code,{children:"Update"})," call."]}),"\n",(0,i.jsxs)(n.li,{children:["You can also create a system that has both an ",(0,i.jsx)(n.code,{children:"Update"})," method and a ",(0,i.jsx)(n.code,{children:"Draw"})," method by implementing the ",(0,i.jsx)(n.code,{children:"IUpdateSystem"})," and ",(0,i.jsx)(n.code,{children:"IDrawSystem"})," interfaces respectively."]}),"\n",(0,i.jsxs)(n.li,{children:["An ",(0,i.jsx)(n.code,{children:"EntitySystem"})," is the base class for all entity processing systems. Typically you won't derive from this class unless you're building a new type of entity processing system. If you do derive from this class you probably also want to implement one of the update or draw interfaces."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-systems",children:"Creating systems"}),"\n",(0,i.jsx)(n.p,{children:"To create a new system, decide which base system to derive from and implement a new class."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public class RenderSystem : EntityDrawSystem\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When you're creating entity systems the first thing you'll want to do is provide an ",(0,i.jsx)(n.code,{children:"Aspect"})," to filter the system to only process the entities you're interested in."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, a typical ",(0,i.jsx)(n.code,{children:"RenderSystem"})," might want to process entities with a ",(0,i.jsx)(n.code,{children:"Sprite"})," component and a ",(0,i.jsx)(n.code,{children:"Transform2"})," component. To provide an aspect you pass it into the base constructor."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public RenderSystem(GraphicsDevice graphicsDevice)\n    : base(Aspect.All(typeof(Sprite), typeof(Transform2)))\n{\n    _graphicsDevice = graphicsDevice;\n    _spriteBatch = new SpriteBatch(graphicsDevice);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Next, you'll need to override the ",(0,i.jsx)(n.code,{children:"Update"})," or ",(0,i.jsx)(n.code,{children:"Draw"})," method (depending on what type of system you're implementing)."]}),"\n",(0,i.jsxs)(n.p,{children:["In our case, the ",(0,i.jsx)(n.code,{children:"Draw"})," method might look something like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public override void Draw(GameTime gameTime)\n{\n    _spriteBatch.Begin();\n\n    foreach (var entity in ActiveEntities)\n    {\n      // draw your entities\n    }\n\n    _spriteBatch.End();\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Note:"})," Don't forget to add your system to the ",(0,i.jsx)(n.code,{children:"WorldBuilder"})," when you're done."]}),"\n",(0,i.jsx)(n.h2,{id:"accessing-components",children:"Accessing components"}),"\n",(0,i.jsx)(n.p,{children:"The preferred way to access components is to use component mappers."}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"ComponentMapper"})," provides a very fast way to access components within a system. When you're using a component mapper you're getting nearly direct access to the underlying arrays that hold the components under the hood."]}),"\n",(0,i.jsxs)(n.p,{children:["To get a component mapper, create a field on your system and use the ",(0,i.jsx)(n.code,{children:"Initialize"})," method to grab an instance of the mapper. Do this for each component type you want to process."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public override void Initialize(IComponentMapperService mapperService)\n{\n  _transformMapper = mapperService.GetMapper<Transform2>();\n  _spriteMapper = mapperService.GetMapper<Sprite>();\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then inside the ",(0,i.jsx)(n.code,{children:"Update"})," or ",(0,i.jsx)(n.code,{children:"Draw"})," method you can get access to the components for each entity you want to process."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"var transform = _transformMapper.Get(entityId);\nvar sprite = _spriteMapper.Get(entityId);\n\n_spriteBatch.Draw(sprite, transform);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Component mappers can also be used to modify entities on the fly. For example, you can add a new component to an entity with the ",(0,i.jsx)(n.code,{children:"Put"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"_buffMapper.Put(entityId, buffComponent);\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Note:"})," The ",(0,i.jsx)(n.code,{children:"Put"})," method will replace an existing component of the same type if it already exists. There is no need to check if the entity already has the component."]}),"\n",(0,i.jsxs)(n.p,{children:["You can also check if an entity ",(0,i.jsx)(n.code,{children:"Has"})," a component or ",(0,i.jsx)(n.code,{children:"Delete"})," a component with the mapper."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["For convienience it's also possible to access components on an entity ",(0,i.jsx)(n.em,{children:"without"})," using component mappers. This can be useful for prototyping ideas or when performance isn't a primary concern."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"var entity = GetEntity(entityId);\nvar health = entity.Get<HealthComponent>();\nvar transform = entity.Get<Transform2>();\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Note:"})," This method of accessing components requires dictionary lookups of the component types each frame. This is still a fairly fast operation, and for some games it'll do just fine."]}),"\n",(0,i.jsx)(n.h2,{id:"filtering-components",children:"Filtering components"}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.code,{children:"Aspect"})," is used by entity systems to decide what component types the system will process. The entities will be available in the system's ",(0,i.jsx)(n.code,{children:"ActiveEntities"})," collection."]}),"\n",(0,i.jsx)(n.p,{children:"An aspect has three methods:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Aspect.All(A, B)"})," requires the entities to have all of the desired components."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Aspect.One(C, D)"})," requires the entities to have any one or more of the components."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Aspect.Exclude(E, F)"})," will exclude entities that have any of these components."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Aspects can also be chained together. For example, an entity matching:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Aspect.All(A, B).One(C, D).Exclude(E)"})," would need to have A and B and at least one of C or D except if it has E."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"In this example we are going to make a rain simulator."}),"\n",(0,i.jsxs)(n.p,{children:["We start by including the ",(0,i.jsx)(n.code,{children:"Entities"})," namespaces."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"using MonoGame.Extended.Entities;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Next, we create our ",(0,i.jsx)(n.code,{children:"Expiry"})," and ",(0,i.jsx)(n.code,{children:"Raindrop"})," components."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"public class Expiry\n{\n    public Expiry(float timeRemaining)\n    {\n        TimeRemaining = timeRemaining;\n    }\n\n    public float TimeRemaining;\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"public class Raindrop\n{\n    public Vector2 Velocity;\n    public float Size = 3;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then we define our systems"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"public class ExpirySystem : EntityProcessingSystem\n{\n    private ComponentMapper<Expiry> _expiryMapper;\n\n    public ExpirySystem() \n        : base(Aspect.All(typeof(Expiry)))\n    {\n    }\n\n    public override void Initialize(IComponentMapperService mapperService)\n    {\n        _expiryMapper = mapperService.GetMapper<Expiry>();\n    }\n\n    public override void Process(GameTime gameTime, int entityId)\n    {\n        var expiry = _expiryMapper.Get(entityId);\n        expiry.TimeRemaining -= gameTime.GetElapsedSeconds();\n        if (expiry.TimeRemaining <= 0)\n            DestroyEntity(entityId);\n    }\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"public class RainfallSystem : EntityUpdateSystem\n{\n    private readonly FastRandom _random = new FastRandom();\n    private ComponentMapper<Transform2> _transformMapper;\n    private ComponentMapper<Raindrop> _raindropMapper;\n    private ComponentMapper<Expiry> _expiryMapper;\n\n    private const float MinSpawnDelay = 0.0f;\n    private const float MaxSpawnDelay = 0.0f;\n    private float _spawnDelay = MaxSpawnDelay;\n\n    public RainfallSystem()\n        : base(Aspect.All(typeof(Transform2), typeof(Raindrop)))\n    {\n    }\n\n    public override void Initialize(IComponentMapperService mapperService)\n    {\n        _transformMapper = mapperService.GetMapper<Transform2>();\n        _raindropMapper = mapperService.GetMapper<Raindrop>();\n        _expiryMapper = mapperService.GetMapper<Expiry>();\n    }\n\n    public override void Update(GameTime gameTime)\n    {\n        var elapsedSeconds = gameTime.GetElapsedSeconds();\n\n        foreach (var entityId in ActiveEntities)\n        {\n            var transform = _transformMapper.Get(entityId);\n            var raindrop = _raindropMapper.Get(entityId);\n\n            raindrop.Velocity += new Vector2(0, 500) * elapsedSeconds;\n            transform.Position += raindrop.Velocity * elapsedSeconds;\n\n            if (transform.Position.Y >= 480 && !_expiryMapper.Has(entityId))\n            {\n                for (var i = 0; i < 3; i++)\n                {\n                    var velocity = new Vector2(_random.NextSingle(-100, 100), -raindrop.Velocity.Y * _random.NextSingle(0.1f, 0.2f));\n                    var id = CreateRaindrop(transform.Position.SetY(479), velocity, (i + 1) * 0.5f);\n                    _expiryMapper.Put(id, new Expiry(1f));\n                }\n\n                DestroyEntity(entityId);\n            }\n        }\n\n        _spawnDelay -= gameTime.GetElapsedSeconds();\n\n        if (_spawnDelay <= 0)\n        {\n            for (var q = 0; q < 50; q++)\n            {\n                var position = new Vector2(_random.NextSingle(0, 800), _random.NextSingle(-240, -480));\n                CreateRaindrop(position);\n            }\n            _spawnDelay = _random.NextSingle(MinSpawnDelay, MaxSpawnDelay);\n        }\n    }\n\n    private int CreateRaindrop(Vector2 position, Vector2 velocity = default(Vector2), float size = 3)\n    {\n        var entity = CreateEntity();\n        entity.Attach(new Transform2(position));\n        entity.Attach(new Raindrop { Velocity = velocity, Size = size });\n        return entity.Id;\n    }\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"public class RenderSystem : EntityDrawSystem\n{\n    private readonly GraphicsDevice _graphicsDevice;\n    private readonly SpriteBatch _spriteBatch;\n\n    private ComponentMapper<Transform2> _transformMapper;\n    private ComponentMapper<Raindrop> _raindropMapper;\n    \n    public RenderSystem(GraphicsDevice graphicsDevice)\n        : base(Aspect.All(typeof(Transform2), typeof(Raindrop)))\n    {\n        _graphicsDevice = graphicsDevice;\n        _spriteBatch = new SpriteBatch(graphicsDevice);\n    }\n\n    public override void Initialize(IComponentMapperService mapperService)\n    {\n        _transformMapper = mapperService.GetMapper<Transform2>();\n        _raindropMapper = mapperService.GetMapper<Raindrop>();\n    }\n\n    public override void Draw(GameTime gameTime)\n    {\n        _graphicsDevice.Clear(Color.DarkBlue * 0.2f);\n        _spriteBatch.Begin(samplerState: SamplerState.PointClamp);\n\n        foreach (var entity in ActiveEntities)\n        {\n            var transform = _transformMapper.Get(entity);\n            var raindrop = _raindropMapper.Get(entity);\n\n            _spriteBatch.FillRectangle(transform.Position, new Size2(raindrop.Size, raindrop.Size), Color.LightBlue);\n        }\n        _spriteBatch.End();\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"And last but not least, we merge everything into the game's initialize function"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"_world = new WorldBuilder()\n    .AddSystem(new RainfallSystem())\n    .AddSystem(new ExpirySystem())\n    .AddSystem(new RenderSystem(GraphicsDevice))\n    .Build();\nComponents.Add(_world);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);