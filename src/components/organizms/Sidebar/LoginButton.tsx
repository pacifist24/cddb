import { VFC } from 'react'
import { login } from 'lib/auth'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Button } from '@mui/material'

const LoginButton: VFC = () => (
  <Button variant="outlined" onClick={login}>
    <TwitterIcon style={{ color: '#1D9BF0', marginRight: '5px' }} />
    <span className="font-bold text-gray-600">Twitterでログイン</span>
  </Button>
)

export default LoginButton
