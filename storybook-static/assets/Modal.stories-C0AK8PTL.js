import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as l}from"./index-CleY8y_P.js";import{c as m,a as Z}from"./cn-JCLedEej.js";import{A as Q,m as w,B as r,I as ee,C as te}from"./Button-CN9SBD50.js";import{H as x,P as p}from"./Typography-7lLFBNhJ.js";import{X as se}from"./x-8Lhho4a_.js";import{T as g}from"./TextInput-DReFoEmA.js";import{C as ne}from"./Checkbox-DbEPyUee.js";import{c as ae}from"./createLucideIcon-Dw_B_vTG.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=ae("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),le=Z("relative mx-auto overflow-y-auto rounded-lg bg-white dark:bg-neutral-800 shadow-lg",{variants:{size:{sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl",full:"w-full h-full max-w-full m-0 rounded-none"}},defaultVariants:{size:"md"}}),o=({isOpen:a,onClose:n,title:t,description:s,children:i,footer:c,closeOnOverlayClick:u=!0,closeOnEscape:f=!0,showCloseButton:G=!0,size:W,overlayClassName:J,contentClassName:Y,bodyClassName:_,footerClassName:$,initialFocus:b})=>{const S=l.useRef(null);l.useEffect(()=>{const d=h=>{h.key==="Escape"&&a&&f&&n()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[a,n,f]),l.useEffect(()=>{if(!a)return;const d=S.current;if(!d)return;const h=(b==null?void 0:b.current)||d;return h&&setTimeout(()=>{document.body.contains(h)&&h.focus()},100),document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[a,b]);const X=d=>{d.target===d.currentTarget&&u&&n()};return e.jsx(Q,{children:a&&e.jsx(l.Fragment,{children:e.jsx(w.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:m("fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",J),onClick:X,"aria-hidden":"true","data-testid":"modal-overlay",children:e.jsxs(w.div,{ref:S,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.2},className:m(le({size:W}),Y),role:"dialog","aria-modal":"true","aria-labelledby":t?"modal-title":void 0,"aria-describedby":s?"modal-description":void 0,tabIndex:-1,children:[G&&e.jsx("button",{className:"absolute top-3 right-3 p-1 rounded-full text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500",onClick:n,"aria-label":"Close modal","data-testid":"modal-close-button",children:e.jsx(se,{size:18})}),(t||s)&&e.jsxs("div",{className:"px-6 pt-6 pb-0",children:[t&&e.jsx(x,{level:"h3",id:"modal-title",className:"text-xl font-semibold mb-2",children:t}),s&&e.jsx("p",{id:"modal-description",className:"text-neutral-600 dark:text-neutral-400",children:s})]}),e.jsx("div",{className:m("p-6",_),children:i}),c&&e.jsx("div",{className:m("px-6 py-4 bg-neutral-50 dark:bg-neutral-900 rounded-b-lg border-t border-neutral-200 dark:border-neutral-700",$),children:c})]})})})})},oe=({title:a,description:n,className:t})=>e.jsxs("div",{className:m("mb-4",t),children:[e.jsx(x,{level:"h3",id:"modal-title",className:"text-xl font-semibold mb-2",children:a}),n&&e.jsx("p",{id:"modal-description",className:"text-neutral-600 dark:text-neutral-400",children:n})]}),ie=({children:a,className:n})=>e.jsx("div",{className:m("flex justify-end space-x-2",n),children:a}),ce=({onConfirm:a,onCancel:n,confirmText:t="Confirm",cancelText:s="Cancel",confirmVariant:i="default",confirmDisabled:c=!1,confirmLoading:u=!1,className:f})=>e.jsxs("div",{className:m("flex justify-end space-x-2",f),children:[e.jsx(r,{variant:"outline",onClick:n,children:s}),e.jsx(r,{variant:i,onClick:a,disabled:c||u,children:u?"Loading...":t})]});o.Header=oe;o.Footer=ie;o.Actions=ce;const je={title:"Design System/Feedback/Modal",component:o,parameters:{layout:"centered",docs:{description:{component:`
# Modal

Modals are dialog boxes that overlay content to provide critical information or request user input.

## Accessibility

- Properly manages focus - focus is trapped within the modal when open
- Supports keyboard navigation (Escape key to close)
- Uses correct ARIA attributes for dialog role
- Prevents interaction with content behind the modal
- Provides close button for easy dismissal

## Usage Guidelines

- Use modals sparingly for important information or critical actions
- Keep content concise and focused on a single task
- Provide clear titles and descriptive buttons
- Allow users to dismiss modals easily (close button, clicking outside, ESC key)
- Avoid nested modals
        `}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Controls whether the modal is open"},onClose:{action:"closed",description:"Function called when the modal should close"},title:{control:"text",description:"The title of the modal"},description:{control:"text",description:"Additional descriptive text for the modal"},size:{control:"select",options:["sm","md","lg","xl","2xl","full"],description:"The size of the modal",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},closeOnOverlayClick:{control:"boolean",description:"Whether clicking the overlay should close the modal",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},closeOnEscape:{control:"boolean",description:"Whether pressing escape should close the modal",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showCloseButton:{control:"boolean",description:"Whether to show the close button",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}},de={render:function(n){const[t,s]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(r,{onClick:()=>s(!0),children:"Open Modal"}),e.jsx(o,{...n,isOpen:t,onClose:()=>s(!1),children:e.jsx("p",{children:"Modal content goes here."})})]})}},v={...de,args:{title:"Modal Title",description:"This is a description of the modal.",footer:e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsx(r,{variant:"outline",children:"Cancel"}),e.jsx(r,{children:"Confirm"})]})}},y={render:function(){const[n,t]=l.useState(!1),[s,i]=l.useState(!1),c=()=>{i(!0),setTimeout(()=>{i(!1),t(!1)},1500)};return e.jsxs("div",{children:[e.jsx(r,{variant:"error",onClick:()=>t(!0),children:"Delete Item"}),e.jsx(o,{isOpen:n,onClose:()=>!s&&t(!1),size:"sm",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-error-100 dark:bg-error-900 mb-4",children:e.jsx(re,{className:"h-6 w-6 text-error-600 dark:text-error-400"})}),e.jsx(x,{level:"h3",className:"text-lg font-semibold",children:"Delete Item"}),e.jsx(p,{className:"mt-2",children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsxs("div",{className:"mt-6 flex justify-center space-x-3",children:[e.jsx(r,{variant:"outline",onClick:()=>t(!1),disabled:s,children:"Cancel"}),e.jsx(r,{variant:"error",onClick:c,disabled:s,children:s?"Deleting...":"Delete"})]})]})})]})}},j={render:function(){const[n,t]=l.useState(!1),[s,i]=l.useState(!1),c=u=>{u.preventDefault(),i(!0),setTimeout(()=>{i(!1),t(!1)},1500)};return e.jsxs("div",{children:[e.jsx(r,{onClick:()=>t(!0),children:"Sign Up"}),e.jsx(o,{isOpen:n,onClose:()=>!s&&t(!1),title:"Create an account",description:"Fill out the form below to create your account.",size:"md",children:e.jsxs("form",{onSubmit:c,children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(g,{label:"First Name",placeholder:"John",required:!0}),e.jsx(g,{label:"Last Name",placeholder:"Doe",required:!0})]}),e.jsx(g,{label:"Email",placeholder:"you@example.com",type:"email",required:!0}),e.jsx(g,{label:"Password",placeholder:"Create a password",type:"password",helperText:"Password must be at least 8 characters",required:!0}),e.jsx(ne,{label:"I agree to the Terms of Service and Privacy Policy",required:!0,hideNativeCheckbox:!0})]}),e.jsxs("div",{className:"mt-6 flex justify-end space-x-2",children:[e.jsx(r,{variant:"outline",onClick:()=>t(!1),type:"button",disabled:s,children:"Cancel"}),e.jsx(r,{type:"submit",disabled:s,children:s?"Creating account...":"Create account"})]})]})})]})}},C={render:function(){const[n,t]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(r,{variant:"secondary",onClick:()=>t(!0),children:"Learn More"}),e.jsxs(o,{isOpen:n,onClose:()=>t(!1),size:"lg",children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("div",{className:"mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900",children:e.jsx(ee,{className:"h-6 w-6 text-primary-600 dark:text-primary-400"})}),e.jsx(x,{level:"h3",className:"mt-3 text-xl font-semibold",children:"About Design Systems"})]}),e.jsxs("div",{className:"text-left",children:[e.jsx(p,{className:"mb-4",children:"A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications."}),e.jsx(p,{className:"mb-4",children:"Design systems help teams build better products faster by making design reusable and scalable. The design system is not just a UI kit or component library; it's a complete set of standards, documentation, and principles along with the tools to implement them."}),e.jsx(p,{className:"mb-4",children:"Key benefits of design systems include:"}),e.jsxs("ul",{className:"list-disc pl-5 mb-4 space-y-2",children:[e.jsx("li",{children:"Consistency across products and platforms"}),e.jsx("li",{children:"Improved collaboration between designers and developers"}),e.jsx("li",{children:"Faster product development and iteration"}),e.jsx("li",{children:"Better quality through tested, accessible components"}),e.jsx("li",{children:"Scalable design that grows with your organization"})]})]}),e.jsx("div",{className:"mt-6 flex justify-center",children:e.jsx(r,{onClick:()=>t(!1),children:"Got it, thanks!"})})]})]})}},k={render:function(){const[n,t]=l.useState(!1),s=()=>{setTimeout(()=>{t(!0)},500)};return e.jsxs("div",{children:[e.jsx(r,{variant:"success",onClick:s,children:"Complete Action"}),e.jsx(o,{isOpen:n,onClose:()=>t(!1),size:"sm",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success-100 dark:bg-success-900 mb-4",children:e.jsx(te,{className:"h-6 w-6 text-success-600 dark:text-success-400"})}),e.jsx(x,{level:"h3",className:"text-lg font-semibold",children:"Action Completed"}),e.jsx(p,{className:"mt-2",children:"Your action has been completed successfully!"}),e.jsx("div",{className:"mt-6",children:e.jsx(r,{variant:"success",onClick:()=>t(!1),className:"w-full",children:"Continue"})})]})})]})}},N={render:function(){const[n,t]=l.useState(null);return e.jsxs("div",{className:"flex flex-col space-y-2",children:[["sm","md","lg","xl","2xl","full"].map(s=>e.jsxs(r,{onClick:()=>t(s),children:[s.toUpperCase()," Modal"]},s)),["sm","md","lg","xl","2xl","full"].map(s=>e.jsxs(o,{isOpen:n===s,onClose:()=>t(null),title:`${s.toUpperCase()} Modal`,size:s,children:[e.jsxs(p,{children:["This is an example of a modal with size ",e.jsx("strong",{children:s}),"."]}),e.jsx("div",{className:"mt-4",children:e.jsx(r,{onClick:()=>t(null),children:"Close"})})]},s))]})}};var I,O,M;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...ModalTemplate,
  args: {
    title: 'Modal Title',
    description: 'This is a description of the modal.',
    footer: <div className="flex justify-end space-x-2">\r
        <Button variant="outline">Cancel</Button>\r
        <Button>Confirm</Button>\r
      </div>
  }
}`,...(M=(O=v.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var D,T,z;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: function DeleteConfirmationExample() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const handleDelete = () => {
      setIsDeleting(true);
      // Simulate API call
      setTimeout(() => {
        setIsDeleting(false);
        setIsOpen(false);
      }, 1500);
    };
    return <div>\r
        <Button variant="error" onClick={() => setIsOpen(true)}>Delete Item</Button>\r
        <Modal isOpen={isOpen} onClose={() => !isDeleting && setIsOpen(false)} size="sm">\r
          <div className="text-center">\r
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-error-100 dark:bg-error-900 mb-4">\r
              <AlertTriangle className="h-6 w-6 text-error-600 dark:text-error-400" />\r
            </div>\r
            <Heading level="h3" className="text-lg font-semibold">Delete Item</Heading>\r
            <Paragraph className="mt-2">Are you sure you want to delete this item? This action cannot be undone.</Paragraph>\r
            <div className="mt-6 flex justify-center space-x-3">\r
              <Button variant="outline" onClick={() => setIsOpen(false)} disabled={isDeleting}>\r
                Cancel\r
              </Button>\r
              <Button variant="error" onClick={handleDelete} disabled={isDeleting}>\r
                {isDeleting ? 'Deleting...' : 'Delete'}\r
              </Button>\r
            </div>\r
          </div>\r
        </Modal>\r
      </div>;
  }
}`,...(z=(T=y.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var B,P,A;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: function SignupFormExample() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsOpen(false);
      }, 1500);
    };
    return <div>\r
        <Button onClick={() => setIsOpen(true)}>Sign Up</Button>\r
        <Modal isOpen={isOpen} onClose={() => !isSubmitting && setIsOpen(false)} title="Create an account" description="Fill out the form below to create your account." size="md">\r
          <form onSubmit={handleSubmit}>\r
            <div className="space-y-4">\r
              <div className="grid grid-cols-2 gap-4">\r
                <TextInput label="First Name" placeholder="John" required />\r
                <TextInput label="Last Name" placeholder="Doe" required />\r
              </div>\r
              <TextInput label="Email" placeholder="you@example.com" type="email" required />\r
              <TextInput label="Password" placeholder="Create a password" type="password" helperText="Password must be at least 8 characters" required />\r
              <Checkbox label="I agree to the Terms of Service and Privacy Policy" required hideNativeCheckbox />\r
            </div>\r
            <div className="mt-6 flex justify-end space-x-2">\r
              <Button variant="outline" onClick={() => setIsOpen(false)} type="button" disabled={isSubmitting}>\r
                Cancel\r
              </Button>\r
              <Button type="submit" disabled={isSubmitting}>\r
                {isSubmitting ? 'Creating account...' : 'Create account'}\r
              </Button>\r
            </div>\r
          </form>\r
        </Modal>\r
      </div>;
  }
}`,...(A=(P=j.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var E,q,F;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: function InformationModalExample() {
    const [isOpen, setIsOpen] = useState(false);
    return <div>\r
        <Button variant="secondary" onClick={() => setIsOpen(true)}>\r
          Learn More\r
        </Button>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg">\r
          <div className="text-center mb-4">\r
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">\r
              <Info className="h-6 w-6 text-primary-600 dark:text-primary-400" />\r
            </div>\r
            <Heading level="h3" className="mt-3 text-xl font-semibold">\r
              About Design Systems\r
            </Heading>\r
          </div>\r
          <div className="text-left">\r
            <Paragraph className="mb-4">\r
              A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.\r
            </Paragraph>\r
            <Paragraph className="mb-4">\r
              Design systems help teams build better products faster by making design reusable and scalable. The design system is not just a UI kit or component library; it's a complete set of standards, documentation, and principles along with the tools to implement them.\r
            </Paragraph>\r
            <Paragraph className="mb-4">\r
              Key benefits of design systems include:\r
            </Paragraph>\r
            <ul className="list-disc pl-5 mb-4 space-y-2">\r
              <li>Consistency across products and platforms</li>\r
              <li>Improved collaboration between designers and developers</li>\r
              <li>Faster product development and iteration</li>\r
              <li>Better quality through tested, accessible components</li>\r
              <li>Scalable design that grows with your organization</li>\r
            </ul>\r
          </div>\r
          <div className="mt-6 flex justify-center">\r
            <Button onClick={() => setIsOpen(false)}>\r
              Got it, thanks!\r
            </Button>\r
          </div>\r
        </Modal>\r
      </div>;
  }
}`,...(F=(q=C.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var U,H,L;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: function SuccessModalExample() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => {
      // Simulate some action being completed
      setTimeout(() => {
        setIsOpen(true);
      }, 500);
    };
    return <div>\r
        <Button variant="success" onClick={handleOpenModal}>\r
          Complete Action\r
        </Button>\r
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm">\r
          <div className="text-center">\r
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success-100 dark:bg-success-900 mb-4">\r
              <CheckCircle className="h-6 w-6 text-success-600 dark:text-success-400" />\r
            </div>\r
            <Heading level="h3" className="text-lg font-semibold">Action Completed</Heading>\r
            <Paragraph className="mt-2">Your action has been completed successfully!</Paragraph>\r
            <div className="mt-6">\r
              <Button variant="success" onClick={() => setIsOpen(false)} className="w-full">\r
                Continue\r
              </Button>\r
            </div>\r
          </div>\r
        </Modal>\r
      </div>;
  }
}`,...(L=(H=k.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var V,R,K;N.parameters={...N.parameters,docs:{...(V=N.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: function ModalSizesExample() {
    const [openSize, setOpenSize] = useState<string | null>(null);
    return <div className="flex flex-col space-y-2">\r
        {(['sm', 'md', 'lg', 'xl', '2xl', 'full'] as const).map(size => <Button key={size} onClick={() => setOpenSize(size)}>\r
            {size.toUpperCase()} Modal\r
          </Button>)}\r
        \r
        {(['sm', 'md', 'lg', 'xl', '2xl', 'full'] as const).map(size => <Modal key={size} isOpen={openSize === size} onClose={() => setOpenSize(null)} title={\`\${size.toUpperCase()} Modal\`} size={size}>\r
            <Paragraph>\r
              This is an example of a modal with size <strong>{size}</strong>.\r
            </Paragraph>\r
            <div className="mt-4">\r
              <Button onClick={() => setOpenSize(null)}>Close</Button>\r
            </div>\r
          </Modal>)}\r
      </div>;
  }
}`,...(K=(R=N.parameters)==null?void 0:R.docs)==null?void 0:K.source}}};const Ce=["Default","DeleteConfirmation","SignupForm","InformationModal","SuccessModal","ModalSizes"];export{v as Default,y as DeleteConfirmation,C as InformationModal,N as ModalSizes,j as SignupForm,k as SuccessModal,Ce as __namedExportsOrder,je as default};
