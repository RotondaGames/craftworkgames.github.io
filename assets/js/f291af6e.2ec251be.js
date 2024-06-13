"use strict";(self.webpackChunkmonogame_extended_website=self.webpackChunkmonogame_extended_website||[]).push([[9591],{8798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=t(4848),s=t(8453);const a={id:"tweening",title:"Tweening",sidebar_label:"Tweening"},o=void 0,r={id:"features/tweening/tweening",title:"Tweening",description:"Inbetweening, or just tweening for short, allows you to generate values for position, size, color, opacity, etc in intermediate frames giving the illusion of animation.",source:"@site/docs/features/tweening/tweening.md",sourceDirName:"features/tweening",slug:"/features/tweening/",permalink:"/docs/features/tweening/",draft:!1,unlisted:!1,editUrl:"https://github.com/craftworkgames/craftworkgames.github.io/tree/develop/docs/features/tweening/tweening.md",tags:[],version:"current",frontMatter:{id:"tweening",title:"Tweening",sidebar_label:"Tweening"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Tiled",permalink:"/docs/features/tiled/"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Usage",id:"usage",level:3},{value:"Easing functions",id:"easing-functions",level:2},{value:"In-Easing functions",id:"in-easing-functions",level:3},{value:"Out-Easing functions",id:"out-easing-functions",level:3},{value:"In-Out-Easing functions",id:"in-out-easing-functions",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Inbetweening, or just tweening for short, allows you to generate values for position, size, color, opacity, etc in intermediate frames giving the illusion of animation."}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MonoGame.Extended.Tweening"})," is distributed via NuGet packages. You can add the NuGet package to your C# project through your IDE of choice (Visual Studio, Xamarin Studio, Rider, etc) or through the Command Line Interface (CLI) using the dotnet command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"dotnet add package MonoGame.Extended.Tweening\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"The assets used in the example don't have any unique assets to download."}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["We start by including the ",(0,i.jsx)(n.code,{children:"Tweening"})," namespace."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"using MonoGame.Extended.Tweening;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Next, we declare a class with a property we want to tween."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"class Player\n{\n    public Vector2 Position { get; set; }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Next, we instantiate an instance of the Tweener and our class."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"private readonly Tweener _tweener = new Tweener();\nprivate readonly Player _player = new Player() { Position = new Vector2(200, 50) };\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then we order the ",(0,i.jsx)(n.code,{children:"Tweener"})," to tween the position.\nThe Tween method requires a target object and an expression that refers to a property of that object."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"_tweener.TweenTo(target: _player, expression: player => _player.Position, toValue: new Vector2(550, 50), duration: 2, delay: 1)\n                .RepeatForever(repeatDelay: 0.2f)\n                .AutoReverse()\n                .Easing(EasingFunctions.Linear);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Next, we add the ",(0,i.jsx)(n.code,{children:"Tweener"})," to the update loop,"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"protected override void Update(GameTime gameTime)\n{\n    _tweener.Update(gameTime.GetElapsedSeconds());\n    base.Update(gameTime);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"And last but not least we draw."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"protected override void Draw(GameTime gameTime)\n{\n    GraphicsDevice.Clear(Color.Black);\n    _spriteBatch.Begin(samplerState: SamplerState.PointClamp);\n    _spriteBatch.FillRectangle(_player.Position.X, _player.Position.Y, Size.X, Size.Y, Color.Red);\n    _spriteBatch.End();\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"easing-functions",children:"Easing functions"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"EasingFunctions"})," calculate a value given a percentage of completeness.\nIn the example ",(0,i.jsx)(n.code,{children:"EasingFunctions.Linear"})," was used. Below is a visual representation of the other ",(0,i.jsx)(n.code,{children:"EasingFunctions"})]}),"\n",(0,i.jsx)(n.h3,{id:"in-easing-functions",children:"In-Easing functions"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"In-Easing functions",src:t(1083).A+"",width:"1250",height:"1250"})}),"\n",(0,i.jsx)(n.h3,{id:"out-easing-functions",children:"Out-Easing functions"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Out-Easing functions",src:t(9360).A+"",width:"1250",height:"1500"})}),"\n",(0,i.jsx)(n.h3,{id:"in-out-easing-functions",children:"In-Out-Easing functions"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"In-Out-Easing functions",src:t(8839).A+"",width:"1250",height:"1500"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1083:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/inEasing-78ec3d95639b9794e13cdfba1abd1c2a.gif"},8839:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/inOutEasing-0f15ed16a902cdfe8dce4df673120b8c.gif"},9360:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/outEasing-bac72e087112c36f50f2226499901a5a.gif"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(6540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);