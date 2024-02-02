const Shadow = (props: any) => {
    return(
        <>{props.hide ? <></> : props.children}</>
    )
}

export default Shadow