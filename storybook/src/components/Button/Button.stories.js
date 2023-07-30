import Center from "../Center/Center";
import Button from "./Button";

export default{
    //should be unique in entire projec
    title:'Form/Button',
    component:Button,
    decorators: [story => <Center>{story()}</Center>],
    args:{
        children: "Default children"
    },
    argTypes:{
          //to access through control panneln
          variant : {control: 'text'},
          //for actions
          onClick:{action: 'clicked'}
    }
}

// export const Primary = () =><Center> <Button variant="primary">Primary</Button></Center>
export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>

const Template = args => <Button {...args}/>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant:"primary",
    children:"Primary Args"
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant:"secondary",
    children:"Secondary Args"
}