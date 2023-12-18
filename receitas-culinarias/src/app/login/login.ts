

export async function logIn(){
    let email = (document.getElementById("email") as HTMLInputElement)?.value
    let password = (document.getElementById("password") as HTMLInputElement)?.value
    return await fetch("/api/user/login",
    {method:"POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email:email,password:password})
    }).then(
        (res) => res.json()
    )
  }