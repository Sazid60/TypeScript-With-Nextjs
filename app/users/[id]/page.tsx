
type UserShape = {
    params: { id: number }
}

const page = ({ params: { id } }: UserShape) => {
    return (
        <div>
            user {id}
        </div>
    );
};

export default page;