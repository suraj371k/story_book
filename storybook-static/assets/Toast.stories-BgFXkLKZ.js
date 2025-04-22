import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{R as oe,r as l}from"./index-CleY8y_P.js";import{c as j,a as ne}from"./cn-JCLedEej.js";import{A as ie,m as ce,I as C,C as le,B as o}from"./Button-CN9SBD50.js";import{X as de}from"./x-8Lhho4a_.js";import{c as Z}from"./createLucideIcon-Dw_B_vTG.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=Z("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=Z("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),pe=ne("pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 shadow-lg transition-all",{variants:{variant:{default:"bg-white border-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-50",info:"bg-primary-50 border-primary-200 text-primary-900 dark:bg-primary-950 dark:border-primary-900 dark:text-primary-100",success:"bg-success-50 border-success-200 text-success-900 dark:bg-success-950 dark:border-success-900 dark:text-success-100",warning:"bg-warning-50 border-warning-200 text-warning-900 dark:bg-warning-950 dark:border-warning-900 dark:text-warning-100",error:"bg-error-50 border-error-200 text-error-900 dark:bg-error-950 dark:border-error-900 dark:text-error-100"}},defaultVariants:{variant:"default"}}),w=oe.forwardRef(({className:t,variant:n,title:r,description:d,autoClose:i=!0,duration:u=5e3,onClose:s,showIcon:a=!0,...c},te)=>{const[b,k]=l.useState(!0);l.useEffect(()=>{if(i){const ae=setTimeout(()=>{k(!1)},u);return()=>clearTimeout(ae)}},[i,u]);const se=()=>{!b&&s&&s()},re=()=>{if(!a)return null;switch(n){case"info":return e.jsx(C,{className:"h-5 w-5 text-primary-500 dark:text-primary-400"});case"success":return e.jsx(le,{className:"h-5 w-5 text-success-500 dark:text-success-400"});case"warning":return e.jsx(ue,{className:"h-5 w-5 text-warning-500 dark:text-warning-400"});case"error":return e.jsx(me,{className:"h-5 w-5 text-error-500 dark:text-error-400"});default:return e.jsx(C,{className:"h-5 w-5 text-neutral-500 dark:text-neutral-400"})}};return e.jsx(ie,{children:b&&e.jsxs(ce.div,{ref:te,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,height:0,marginTop:0},transition:{duration:.3},onAnimationComplete:se,className:j(pe({variant:n}),t),role:"alert","aria-live":"polite",...c,children:[e.jsxs("div",{className:"flex items-start gap-3 w-full",children:[a&&e.jsx("div",{className:"flex-shrink-0 mt-0.5",children:re()}),e.jsxs("div",{className:"flex-1",children:[r&&e.jsx("div",{className:"font-medium",children:r}),d&&e.jsx("div",{className:j("text-sm opacity-90",!r&&"mt-0"),children:d})]})]}),e.jsx("button",{onClick:()=>k(!1),className:"rounded-full p-1 flex-shrink-0 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2","aria-label":"Close toast",children:e.jsx(de,{className:"h-4 w-4"})})]})})});w.displayName="Toast";const ee=l.createContext(void 0),he=({children:t})=>{const[n,r]=l.useState([]),d=s=>{const a=Math.random().toString(36).substring(2,9);return r(c=>[...c,{...s,id:a}]),a},i=s=>{r(a=>a.filter(c=>c.id!==s))},u=()=>{r([])};return e.jsxs(ee.Provider,{value:{toasts:n,addToast:d,removeToast:i,removeAllToasts:u},children:[t,e.jsx("div",{className:"fixed top-4 right-4 z-50 flex flex-col gap-2 w-full max-w-sm",children:n.map(s=>e.jsx(w,{variant:s.variant,title:s.title,description:s.description,duration:s.duration,showIcon:s.showIcon,onClose:()=>i(s.id)},s.id))})]})},fe=()=>{const t=l.useContext(ee);if(!t)throw new Error("useToast must be used within a ToastProvider");return t},je={title:"Design System/Feedback/Toast",component:w,parameters:{layout:"centered",docs:{description:{component:`
# Toast

Toasts provide brief notifications or feedback messages to users that appear temporarily.

## Accessibility

- Toasts use appropriate ARIA roles for alerts
- Auto-dismiss functionality can be disabled for important messages
- Toast messages can be dismissed manually with a clear button
- Color contrast meets WCAG 2.1 Level AA requirements

## Usage Guidelines

- Use toasts for non-critical information that doesn't require immediate action
- Keep messages concise and actionable
- Position toasts consistently (usually top-right)
- Use appropriate variants to convey the nature of the message (info, success, warning, error)
- Provide enough time for users to read the message
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","info","success","warning","error"],description:"The visual style of the toast",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},title:{control:"text",description:"The title of the toast"},description:{control:"text",description:"The description of the toast"},autoClose:{control:"boolean",description:"Whether the toast should close automatically",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},duration:{control:"number",description:"The duration in milliseconds before the toast closes automatically",table:{type:{summary:"number"},defaultValue:{summary:"5000"}}},showIcon:{control:"boolean",description:"Whether to show the icon",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}},decorators:[t=>e.jsx("div",{className:"w-[350px] h-[150px]",children:e.jsx(t,{})})]},m={args:{title:"Toast Message",description:"This is a default toast message."}},p={args:{variant:"info",title:"Information",description:"This action has been completed."}},h={args:{variant:"success",title:"Success",description:"Your changes have been saved successfully."}},f={args:{variant:"warning",title:"Warning",description:"This action might have unexpected results."}},g={args:{variant:"error",title:"Error",description:"There was a problem processing your request."}},x={args:{variant:"info",title:"Persistent Toast",description:"This toast will not close automatically.",autoClose:!1}},y={args:{title:"No Icon",description:"This toast does not display an icon.",showIcon:!1}},v={args:{variant:"info",title:"This is a very long toast title that might wrap onto multiple lines",description:"The description is also quite detailed and provides more information about the toast message."}},T={render:function(){return e.jsx(he,{children:e.jsx(ge,{})})},parameters:{docs:{description:{story:"This example demonstrates how to use the `useToast` hook to show different types of toasts."}}}};function ge(){const{addToast:t}=fe();return e.jsxs("div",{className:"flex flex-col space-y-4 items-start",children:[e.jsx(o,{onClick:()=>t({variant:"default",title:"Default Toast",description:"This is a default toast message"}),children:"Show Default Toast"}),e.jsx(o,{onClick:()=>t({variant:"info",title:"Information",description:"This is an informational message"}),variant:"secondary",children:"Show Info Toast"}),e.jsx(o,{onClick:()=>t({variant:"success",title:"Success",description:"Operation completed successfully"}),variant:"success",children:"Show Success Toast"}),e.jsx(o,{onClick:()=>t({variant:"warning",title:"Warning",description:"This might have consequences"}),variant:"warning",children:"Show Warning Toast"}),e.jsx(o,{onClick:()=>t({variant:"error",title:"Error",description:"Something went wrong"}),variant:"error",children:"Show Error Toast"}),e.jsx(o,{onClick:()=>t({variant:"info",title:"Persistent Toast",description:"This toast will not close automatically",duration:1e5}),variant:"outline",children:"Show Persistent Toast"})]})}var S,I,N;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Toast Message',
    description: 'This is a default toast message.'
  }
}`,...(N=(I=m.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var A,W,E;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information',
    description: 'This action has been completed.'
  }
}`,...(E=(W=p.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var P,q,D;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success',
    description: 'Your changes have been saved successfully.'
  }
}`,...(D=(q=h.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var V,R,L;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning',
    description: 'This action might have unexpected results.'
  }
}`,...(L=(R=f.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var z,M,U;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Error',
    description: 'There was a problem processing your request.'
  }
}`,...(U=(M=g.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var X,B,G;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Persistent Toast',
    description: 'This toast will not close automatically.',
    autoClose: false
  }
}`,...(G=(B=x.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var O,Y,_;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'No Icon',
    description: 'This toast does not display an icon.',
    showIcon: false
  }
}`,...(_=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var $,F,K;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'This is a very long toast title that might wrap onto multiple lines',
    description: 'The description is also quite detailed and provides more information about the toast message.'
  }
}`,...(K=(F=v.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var H,J,Q;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: function ToastExample() {
    // Return a component that uses the toast context
    return <ToastProvider>\r
        <ToastDemoInner />\r
      </ToastProvider>;
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the \`useToast\` hook to show different types of toasts.'
      }
    }
  }
}`,...(Q=(J=T.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Ce=["Default","Info","Success","Warning","Error","WithoutAutoClose","WithoutIcon","WithLongTitle","ToastDemo"];export{m as Default,g as Error,p as Info,h as Success,T as ToastDemo,f as Warning,v as WithLongTitle,x as WithoutAutoClose,y as WithoutIcon,Ce as __namedExportsOrder,je as default};
