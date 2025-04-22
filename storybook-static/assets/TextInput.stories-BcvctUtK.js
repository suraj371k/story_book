import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{T as r}from"./TextInput-DReFoEmA.js";import{c as h}from"./createLucideIcon-Dw_B_vTG.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-JCLedEej.js";import"./Typography-7lLFBNhJ.js";import"./x-8Lhho4a_.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=h("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=h("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=h("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=h("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),ce={title:"Design System/Inputs/TextInput",component:r,parameters:{layout:"centered",docs:{description:{component:`
# Text Input

Text inputs allow users to enter and edit text. They can have different states and variants to match various use cases.

## Accessibility

- All inputs have associated labels for screen readers
- Error states are communicated with aria-invalid and aria-describedby
- Inputs support keyboard focus with visible focus indicators
- Color contrast meets WCAG 2.1 Level AA requirements

## Usage Guidelines

- Always provide clear, concise labels
- Use helper text to provide additional context when needed
- Use error states to show validation issues
- Consider using placeholder text for additional guidance, not as a replacement for labels
        `}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Controls the size of the input",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},label:{control:"text",description:"The label for the input"},helperText:{control:"text",description:"Helper text provides additional context"},error:{control:"text",description:"Error message to display"},success:{control:"text",description:"Success message to display"},clearable:{control:"boolean",description:"Adds a clear button when the input has a value"},disabled:{control:"boolean",description:"Disables the input"},required:{control:"boolean",description:"Makes the input required"},placeholder:{control:"text",description:"Placeholder text"},type:{control:"select",options:["text","email","password","search","tel","url","number"],description:"The type of input"}}},a={args:{label:"Username",placeholder:"Enter your username"}},s={args:{label:"Email",placeholder:"Enter your email",helperText:"We'll never share your email with anyone else.",type:"email"}},t={args:{label:"Password",placeholder:"Enter your password",type:"password",error:"Password must be at least 8 characters long."}},l={args:{label:"Username",placeholder:"Enter your username",value:"johndoe",success:"Username is available!"}},o={args:{label:"Email Address",placeholder:"Enter your email",startIcon:e.jsx(Z,{size:16}),type:"email"}},n={args:{label:"Search",placeholder:"Search for something",startIcon:e.jsx($,{size:16}),clearable:!0,value:"design systems"}},i={args:{label:"Password",placeholder:"Enter your password",type:"password",startIcon:e.jsx(Y,{size:16})}},c={args:{label:"Username",placeholder:"Enter your username",value:"johndoe",disabled:!0}},d={args:{label:"Email",placeholder:"Enter your email",required:!0,type:"email"}},p={render:()=>e.jsxs("div",{className:"space-y-4 w-[300px]",children:[e.jsx(r,{size:"sm",label:"Small Input",placeholder:"Small input"}),e.jsx(r,{size:"md",label:"Medium Input",placeholder:"Medium input (default)"}),e.jsx(r,{size:"lg",label:"Large Input",placeholder:"Large input"})]})},u={render:()=>e.jsxs("div",{className:"space-y-4 w-[350px] p-6 border border-neutral-200 rounded-lg dark:border-neutral-700",children:[e.jsx("h2",{className:"text-2xl font-semibold text-neutral-900 dark:text-neutral-50",children:"Login"}),e.jsx(r,{label:"Username",placeholder:"Enter your username",startIcon:e.jsx(ee,{size:16}),required:!0}),e.jsx(r,{label:"Password",placeholder:"Enter your password",type:"password",startIcon:e.jsx(Y,{size:16}),required:!0}),e.jsx("div",{className:"pt-2",children:e.jsx("button",{className:"w-full bg-primary-600 text-white rounded-md py-2 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-700 dark:hover:bg-primary-600",children:"Sign In"})})]})},m={render:()=>e.jsxs("div",{className:"space-y-4 w-[350px]",children:[e.jsx(r,{label:"Default",placeholder:"Default input"}),e.jsx(r,{label:"With value",value:"Input value"}),e.jsx(r,{label:"Disabled",value:"Disabled input",disabled:!0}),e.jsx(r,{label:"With error",value:"Invalid value",error:"This field has an error"}),e.jsx(r,{label:"With success",value:"Valid value",success:"This value is valid"}),e.jsx(r,{label:"Required",placeholder:"Required input",required:!0}),e.jsx(r,{label:"With helper text",placeholder:"Input with helper text",helperText:"This is some helpful information"}),e.jsx(r,{label:"Clearable",value:"Clearable input",clearable:!0}),e.jsx(r,{label:"With icon",placeholder:"Input with icon",startIcon:e.jsx(Z,{size:16})}),e.jsx(r,{label:"Password",type:"password",value:"password123"})]})};var b,x,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username'
  }
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var g,v,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'We\\'ll never share your email with anyone else.',
    type: 'email'
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var I,f,T;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    error: 'Password must be at least 8 characters long.'
  }
}`,...(T=(f=t.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var S,j,E;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    value: 'johndoe',
    success: 'Username is available!'
  }
}`,...(E=(j=l.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var k,z,W;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    startIcon: <Mail size={16} />,
    type: 'email'
  }
}`,...(W=(z=o.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var q,U,L;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search for something',
    startIcon: <Search size={16} />,
    clearable: true,
    value: 'design systems'
  }
}`,...(L=(U=n.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var D,P,N;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    startIcon: <Lock size={16} />
  }
}`,...(N=(P=i.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var A,M,C;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    value: 'johndoe',
    disabled: true
  }
}`,...(C=(M=c.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var R,H,V;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
    type: 'email'
  }
}`,...(V=(H=d.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var F,G,_;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[300px]">\r
      <TextInput size="sm" label="Small Input" placeholder="Small input" />\r
      <TextInput size="md" label="Medium Input" placeholder="Medium input (default)" />\r
      <TextInput size="lg" label="Large Input" placeholder="Large input" />\r
    </div>
}`,...(_=(G=p.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var O,B,J;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[350px] p-6 border border-neutral-200 rounded-lg dark:border-neutral-700">\r
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">Login</h2>\r
      <TextInput label="Username" placeholder="Enter your username" startIcon={<User size={16} />} required />\r
      <TextInput label="Password" placeholder="Enter your password" type="password" startIcon={<Lock size={16} />} required />\r
      <div className="pt-2">\r
        <button className="w-full bg-primary-600 text-white rounded-md py-2 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-700 dark:hover:bg-primary-600">\r
          Sign In\r
        </button>\r
      </div>\r
    </div>
}`,...(J=(B=u.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,Q,X;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[350px]">\r
      <TextInput label="Default" placeholder="Default input" />\r
      <TextInput label="With value" value="Input value" />\r
      <TextInput label="Disabled" value="Disabled input" disabled />\r
      <TextInput label="With error" value="Invalid value" error="This field has an error" />\r
      <TextInput label="With success" value="Valid value" success="This value is valid" />\r
      <TextInput label="Required" placeholder="Required input" required />\r
      <TextInput label="With helper text" placeholder="Input with helper text" helperText="This is some helpful information" />\r
      <TextInput label="Clearable" value="Clearable input" clearable />\r
      <TextInput label="With icon" placeholder="Input with icon" startIcon={<Mail size={16} />} />\r
      <TextInput label="Password" type="password" value="password123" />\r
    </div>
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const de=["Default","WithHelperText","WithError","WithSuccess","WithStartIcon","Clearable","Password","Disabled","Required","Sizes","LoginForm","AllStates"];export{m as AllStates,n as Clearable,a as Default,c as Disabled,u as LoginForm,i as Password,d as Required,p as Sizes,t as WithError,s as WithHelperText,o as WithStartIcon,l as WithSuccess,de as __namedExportsOrder,ce as default};
