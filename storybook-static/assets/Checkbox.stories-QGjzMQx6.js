import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as F}from"./index-CleY8y_P.js";import{C as r}from"./Checkbox-DbEPyUee.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./cn-JCLedEej.js";import"./Typography-7lLFBNhJ.js";import"./createLucideIcon-Dw_B_vTG.js";const te={title:"Design System/Inputs/Checkbox",component:r,parameters:{layout:"centered",docs:{description:{component:`
# Checkbox

Checkboxes allow users to select one or more items from a set of options, or to turn an option on or off.

## Accessibility

- Native checkboxes are keyboard accessible and work with screen readers
- Custom checkboxes maintain accessibility with proper ARIA attributes
- Labels are properly associated with inputs
- Error states are communicated with aria-invalid and aria-describedby

## Usage Guidelines

- Use checkboxes for binary choices or multiple selection from a list
- Always provide clear, concise labels
- Group related checkboxes together
- Use error states to show validation issues
        `}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Controls the size of the checkbox",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},label:{control:"text",description:"The label for the checkbox"},helperText:{control:"text",description:"Helper text provides additional context"},error:{control:"text",description:"Error message to display"},checked:{control:"boolean",description:"Whether the checkbox is checked"},disabled:{control:"boolean",description:"Disables the checkbox"},required:{control:"boolean",description:"Makes the checkbox required"},hideNativeCheckbox:{control:"boolean",description:"Use custom checkbox styling instead of native"}}},a={args:{label:"Accept terms and conditions"}},s={args:{label:"Subscribe to newsletter",helperText:"You can unsubscribe at any time."}},o={args:{label:"Accept terms and conditions",error:"You must accept the terms to continue.",required:!0}},c={args:{label:"Remember me",disabled:!0}},n={args:{label:"Remember me",disabled:!0,checked:!0}},i={args:{label:"Accept terms and conditions",required:!0}},l={args:{label:"Use custom checkbox style",hideNativeCheckbox:!0}},d={render:()=>e.jsxs("div",{className:"space-y-4 w-[300px]",children:[e.jsx(r,{size:"sm",label:"Small checkbox",hideNativeCheckbox:!0}),e.jsx(r,{size:"md",label:"Medium checkbox (default)",hideNativeCheckbox:!0}),e.jsx(r,{size:"lg",label:"Large checkbox",hideNativeCheckbox:!0})]})},h={render:function(){const[t,O]=F.useState({marketing:!0,updates:!1,newsletter:!1}),b=V=>B=>{O({...t,[V]:B.target.checked})};return e.jsxs("div",{className:"space-y-4 w-[350px] p-6 border border-neutral-200 rounded-lg dark:border-neutral-700",children:[e.jsx("h2",{className:"text-2xl font-semibold text-neutral-900 dark:text-neutral-50",children:"Email Preferences"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(r,{label:"Marketing emails",helperText:"Receive emails about new products and offers.",checked:t.marketing,onChange:b("marketing"),hideNativeCheckbox:!0}),e.jsx(r,{label:"Product updates",helperText:"Get notified about updates to products you've purchased.",checked:t.updates,onChange:b("updates"),hideNativeCheckbox:!0}),e.jsx(r,{label:"Weekly newsletter",helperText:"Receive our weekly newsletter with industry news and tips.",checked:t.newsletter,onChange:b("newsletter"),hideNativeCheckbox:!0})]}),e.jsx("div",{className:"pt-2",children:e.jsx("button",{className:"w-full bg-primary-600 text-white rounded-md py-2 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-700 dark:hover:bg-primary-600",children:"Save Preferences"})})]})}},u={render:()=>e.jsxs("div",{className:"space-y-4 w-[350px]",children:[e.jsx(r,{label:"Default unchecked",hideNativeCheckbox:!0}),e.jsx(r,{label:"Default checked",checked:!0,hideNativeCheckbox:!0}),e.jsx(r,{label:"With helper text",helperText:"This is some helpful information",hideNativeCheckbox:!0}),e.jsx(r,{label:"With error",error:"This field has an error",hideNativeCheckbox:!0}),e.jsx(r,{label:"Required",required:!0,hideNativeCheckbox:!0}),e.jsx(r,{label:"Disabled unchecked",disabled:!0,hideNativeCheckbox:!0}),e.jsx(r,{label:"Disabled checked",disabled:!0,checked:!0,hideNativeCheckbox:!0})]})};var p,m,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions'
  }
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var k,f,g;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'You can unsubscribe at any time.'
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var C,v,y;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    error: 'You must accept the terms to continue.',
    required: true
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var N,w,S;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Remember me',
    disabled: true
  }
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var j,T,D;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Remember me',
    disabled: true,
    checked: true
  }
}`,...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var R,E,P;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    required: true
  }
}`,...(P=(E=i.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var q,A,W;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Use custom checkbox style',
    hideNativeCheckbox: true
  }
}`,...(W=(A=l.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var z,G,M;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[300px]">\r
      <Checkbox size="sm" label="Small checkbox" hideNativeCheckbox />\r
      <Checkbox size="md" label="Medium checkbox (default)" hideNativeCheckbox />\r
      <Checkbox size="lg" label="Large checkbox" hideNativeCheckbox />\r
    </div>
}`,...(M=(G=d.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var U,H,L;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: function PreferencesExample() {
    const [preferences, setPreferences] = useState({
      marketing: true,
      updates: false,
      newsletter: false
    });
    const handleChange = (name: keyof typeof preferences) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setPreferences({
        ...preferences,
        [name]: e.target.checked
      });
    };
    return <div className="space-y-4 w-[350px] p-6 border border-neutral-200 rounded-lg dark:border-neutral-700">\r
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">Email Preferences</h2>\r
        <div className="space-y-3">\r
          <Checkbox label="Marketing emails" helperText="Receive emails about new products and offers." checked={preferences.marketing} onChange={handleChange('marketing')} hideNativeCheckbox />\r
          <Checkbox label="Product updates" helperText="Get notified about updates to products you've purchased." checked={preferences.updates} onChange={handleChange('updates')} hideNativeCheckbox />\r
          <Checkbox label="Weekly newsletter" helperText="Receive our weekly newsletter with industry news and tips." checked={preferences.newsletter} onChange={handleChange('newsletter')} hideNativeCheckbox />\r
        </div>\r
        <div className="pt-2">\r
          <button className="w-full bg-primary-600 text-white rounded-md py-2 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-700 dark:hover:bg-primary-600">\r
            Save Preferences\r
          </button>\r
        </div>\r
      </div>;
  }
}`,...(L=(H=h.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var Y,I,_;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[350px]">\r
      <Checkbox label="Default unchecked" hideNativeCheckbox />\r
      <Checkbox label="Default checked" checked hideNativeCheckbox />\r
      <Checkbox label="With helper text" helperText="This is some helpful information" hideNativeCheckbox />\r
      <Checkbox label="With error" error="This field has an error" hideNativeCheckbox />\r
      <Checkbox label="Required" required hideNativeCheckbox />\r
      <Checkbox label="Disabled unchecked" disabled hideNativeCheckbox />\r
      <Checkbox label="Disabled checked" disabled checked hideNativeCheckbox />\r
    </div>
}`,...(_=(I=u.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const ae=["Default","WithHelperText","WithError","Disabled","DisabledChecked","Required","CustomCheckbox","Sizes","PreferencesGroup","AllStates"];export{u as AllStates,l as CustomCheckbox,a as Default,c as Disabled,n as DisabledChecked,h as PreferencesGroup,i as Required,d as Sizes,o as WithError,s as WithHelperText,ae as __namedExportsOrder,te as default};
