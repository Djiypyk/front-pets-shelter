interface IProps {
    error: Error
}

export const ErrorPage = ({ error }: IProps) => {
    return (
        <div>
            <div></div>
            <div></div>
            <b></b>
            <div>{error.name}</div>
            <br />
            <div>{error.stack}</div>
            <br />
            <div>{error.message}</div>
        </div>
    )
}
