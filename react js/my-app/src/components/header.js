function Header(props)
{
    return(
        <div>
            <h1>I am {props.name} working as {props.role} for the last {props.exp} years</h1>
        </div>
    )
}
//Hello props.name
//Hello Shankar
export function Nav()
{
    return(
        <div>
            <h1>Nav component</h1>
        </div>
    )
}

export default Header;