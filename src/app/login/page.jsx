import { Button, Button2 } from "@/components/button.component";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth/next"

const Login = async () => {

    const data = await getServerSession(authOptions)

    console.log(data);
    return (
        <div>
            {data ? (
                <>
                    <p>
                        {data?.user?.name}
                        {data?.user?.email}
                    </p>
                    <img src={data?.user?.image} alt="" />
                </>
            ) : <p> Not Logged in  </p>}


            <Button />
            <Button2 />
        </div>
    )
}

export default Login