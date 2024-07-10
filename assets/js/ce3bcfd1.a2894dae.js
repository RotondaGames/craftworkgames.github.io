"use strict";(self.webpackChunkmonogame_extended_website=self.webpackChunkmonogame_extended_website||[]).push([[7962],{7659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=n(4848),i=n(8453);const s={id:"gum-forms",sidebar_label:"Gum Forms",title:"Gum Forms",description:"An example document for gum"},r=void 0,l={id:"features/ui/gum/gum-forms/gum-forms",title:"Gum Forms",description:"An example document for gum",source:"@site/docs/features/ui/gum/gum-forms/gum-forms.md",sourceDirName:"features/ui/gum/gum-forms",slug:"/features/ui/gum/gum-forms/",permalink:"/docs/features/ui/gum/gum-forms/",draft:!1,unlisted:!1,editUrl:"https://github.com/craftworkgames/craftworkgames.github.io/tree/develop/docs/features/ui/gum/gum-forms/gum-forms.md",tags:[],version:"current",frontMatter:{id:"gum-forms",sidebar_label:"Gum Forms",title:"Gum Forms",description:"An example document for gum"},sidebar:"docs",previous:{title:"InputListener",permalink:"/docs/features/input/inputlistener/"}},a={},c=[{value:"Setup",id:"setup",level:2},{value:"Button",id:"button",level:2},{value:"CheckBox",id:"checkbox",level:2},{value:"ListBox",id:"listbox",level:2},{value:"Slider",id:"slider",level:2},{value:"TextBox",id:"textbox",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Gum Forms provides a collection of flexible, fully customizable controls which can be added to your project with just a few lines of code. This document provides setup and an introduction to using Gum forms controls. For full documentation see the ",(0,o.jsx)(t.a,{href:"https://docs.flatredball.com/gum/monogame/gum-forms",children:"Gum Forms documentation"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(t.p,{children:"Gum Forms uses the following objects for initialization, updating, and drawing:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"FormsUtilities - provides defaults, initialization, and every-frame logic for all forms objects."}),"\n",(0,o.jsx)(t.li,{children:"SystemManagers - provides logic and rendering for the visuals for forms elements."}),"\n",(0,o.jsx)(t.li,{children:"GraphicalUiElement - root object for all forms objects."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The following code shows a single Gum Forms button in an otherwise empty Game1 class:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",children:'public class Game1 : Game\n{\n    private GraphicsDeviceManager _graphics;\n\n    // Gum renders and updates using a hierarchy. At least\n    // one object must have its AddToManagers method called.\n    // If not loading from-file, then the easiest way to do this\n    // is to create a ContainerRuntime and add it to the managers.\n    ContainerRuntime Root;\n\n    public Game1()\n    {\n        _graphics = new GraphicsDeviceManager(this);\n        Content.RootDirectory = "Content";\n        IsMouseVisible = true;\n    }\n\n    protected override void Initialize()\n    {\n        SystemManagers.Default = new SystemManagers(); \n        SystemManagers.Default.Initialize(_graphics.GraphicsDevice, fullInstantiation: true);\n        FormsUtilities.InitializeDefaults();\n\n        Root = new ContainerRuntime();\n        Root.Width = 0;\n        Root.Height = 0;\n        Root.WidthUnits = Gum.DataTypes.DimensionUnitType.RelativeToContainer;\n        Root.HeightUnits = Gum.DataTypes.DimensionUnitType.RelativeToContainer;\n        Root.AddToManagers();\n\n\n        var button = new Button();\n        Root.Children.Add(button.Visual);\n        button.X = 50;\n        button.Y = 50;\n        button.Width = 100;\n        button.Height = 50;\n        button.Text = "Hello MonoGame.Extended!";\n        int clickCount = 0;\n        button.Click += (_, _) =>\n        {\n            clickCount++;\n            button.Text = $"Clicked {clickCount} times";\n        };\n        base.Initialize();\n    }\n\n    protected override void Update(GameTime gameTime)\n    {\n        FormsUtilities.Update(gameTime, Root);\n        SystemManagers.Default.Activity(gameTime.TotalGameTime.TotalSeconds);\n        base.Update(gameTime);\n    }\n\n    protected override void Draw(GameTime gameTime)\n    {\n        GraphicsDevice.Clear(Color.CornflowerBlue);\n        SystemManagers.Default.Draw();\n        base.Draw(gameTime);\n    }\n}\n\n'})}),"\n",(0,o.jsx)(t.p,{children:"The code above shows how to create a Button and add it to the Root object which controls the layout for all Gum objects. Any Gum Forms object can be added to the Root object."}),"\n",(0,o.jsx)(t.h2,{id:"button",children:"Button"}),"\n",(0,o.jsx)(t.p,{children:"The Button is a control providing an event for handling clicks. Button objects can also display Text to the user which can be modified through the String property."}),"\n",(0,o.jsx)(t.p,{children:"The following code adds a button which increments every time it is clicked:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",children:'var button = new Button();\nRoot.Children.Add(button.Visual);\nbutton.X = 0;\nbutton.Y = 0;\nbutton.Width = 100;\nbutton.Height = 50;\nbutton.Text = "Hello MonoGame!";\nint clickCount = 0;\nbutton.Click += (_, _) =>\n{\n    clickCount++;\n    button.Text = $"Clicked {clickCount} times";\n};\n'})}),"\n",(0,o.jsx)(t.h2,{id:"checkbox",children:"CheckBox"}),"\n",(0,o.jsx)(t.p,{children:"The CheckBox control provides the ability to display a true/false state and allows the user to toggle the state through clicking."}),"\n",(0,o.jsx)(t.p,{children:"The following code creates a CheckBox which outputs text whenever it is checked and unchecked:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",children:'var checkBox = new CheckBox();\nRoot.Children.Add(checkBox.Visual);\ncheckBox.X = 50;\ncheckBox.Y = 50;\ncheckBox.Text = "Checkbox";\ncheckBox.Checked += (_,_) => Debug.WriteLine($"IsChecked:{checkBox.IsChecked}");\ncheckBox.Unchecked += (_, _) => Debug.WriteLine($"IsChecked:{checkBox.IsChecked}");\n'})}),"\n",(0,o.jsx)(t.h2,{id:"listbox",children:"ListBox"}),"\n",(0,o.jsx)(t.p,{children:"The ListBox control provides a scrollable list of ListBoxItems for displaying and selecting from a list."}),"\n",(0,o.jsxs)(t.p,{children:["The following code adds items to a ListBox when a button is clicked. When an item is added, ",(0,o.jsx)(t.code,{children:"ScrollIntoView"})," is called so the item is shown."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",children:'var listBox = new ListBox();\nthis.Root.Children.Add(listBox.Visual);\nlistBox.X = 50;\nlistBox.Y = 50;\nlistBox.Width = 400;\nlistBox.Height = 200;\n\nvar button = new Button();\nthis.Root.Children.Add(button.Visual);\nbutton.X = 50;\nbutton.Y = 270;\nbutton.Width = 200;\nbutton.Height = 40;\nbutton.Text = "Add to ListBox";\nbutton.Click += (s, e) =>\n{\n    var newItem = $"Item @ {DateTime.Now}";\n    listBox.Items.Add(newItem);\n    listBox.ScrollIntoView(newItem);\n};\n'})}),"\n",(0,o.jsx)(t.h2,{id:"slider",children:"Slider"}),"\n",(0,o.jsxs)(t.p,{children:["The Slider control provides a way for the user to change a value by dragging the slider ",(0,o.jsx)(t.em,{children:"thumb"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The following code creates a Slider which allows the user to select a value between 0 and 30, inclusive.  The ",(0,o.jsx)(t.code,{children:"IsSnapToTickEnabled"})," property results in the value being snapped to the ",(0,o.jsx)(t.code,{children:"TickFrequency"})," value. In this case, the value is used to force whole numbers."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",children:'var slider = new Slider();\nthis.Root.Children.Add(slider.Visual);\nslider.X = 50;\nslider.Y = 50;\nslider.Minimum = 0;\nslider.Maximum = 30;\nslider.TicksFrequency = 1;\nslider.IsSnapToTickEnabled = true;\nslider.Width = 250;\nslider.ValueChanged += (_, _) => \n    Debug.WriteLine($"Value: {slider.Value}");\nslider.ValueChangeCompleted += (_, _) => \n    Debug.WriteLine($"Finished setting Value: {slider.Value}");\n'})}),"\n",(0,o.jsx)(t.h2,{id:"textbox",children:"TextBox"}),"\n",(0,o.jsx)(t.p,{children:"The TextBox control allows users to enter a string. It supports highlighting, copy/paste, selection with mouse and keyboard, and CTRL key for performing operations on entire words."}),"\n",(0,o.jsx)(t.p,{children:"The following code creates two TextBoxes which can be used to test copy/paste."}),"\n",(0,o.jsx)(t.p,{children:'``cs\nvar textBox = new TextBox();\nthis.Root.Children.Add(textBox.Visual);\ntextBox.X = 50;\ntextBox.Y = 50;\ntextBox.Width = 200;\ntextBox.Height = 34;\ntextBox.Placeholder = "Placeholder Text...";'}),"\n",(0,o.jsx)(t.p,{children:'var textBox2 = new TextBox();\nthis.Root.Children.Add(textBox2.Visual);\ntextBox2.X = 50;\ntextBox2.Y = 90;\ntextBox2.Width = 200;\ntextBox2.Height = 34;\ntextBox2.Placeholder = "Placeholder Text...";'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var o=n(6540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);