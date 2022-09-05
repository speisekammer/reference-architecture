/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'clicked' }
  }
}

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const DefaultButton = (args) => <Button handleClick={args.action}/>
