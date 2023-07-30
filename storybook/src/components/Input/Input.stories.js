import Input from "./Input";

export default {
    title: 'Form/Input',
    component: Input
}

export const Small = () => <Input variant="sm" place="Enter in small" type="text"  onClick={console.log('clicked')}/>
export const Medium = () => <Input variant="md" place="Enter in medium" type="number"/> 
export const Large = () => <Input variant="lg" place="Enter in large" type="email"/>

Small.storyName = "Small Input"