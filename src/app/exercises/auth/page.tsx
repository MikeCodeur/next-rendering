import {Label} from '@/components/ui/label'

import Logout from './logout'
import {getConnectedUser} from './lib/dal'
import Link from 'next/link'

export default async function Page() {
  const userLogged = await getConnectedUser()
  console.log('user', userLogged?.email ?? 'no user logged')
  return (
    <div className="mx-auto max-w-2xl p-6 text-center text-lg">
      {!userLogged && <Label> You are not connected</Label>}
      <div>
        {!userLogged && <Link href="/exercises/auth/login"> Login</Link>}
        {!userLogged && <Link href="/exercises/auth/register"> Register</Link>}
      </div>
      {userLogged && (
        <>
          <Label className="text-xl">
            User connected {userLogged.email} ({userLogged.role})
          </Label>
          <Logout user={userLogged}></Logout>
        </>
      )}
    </div>
  )
}
