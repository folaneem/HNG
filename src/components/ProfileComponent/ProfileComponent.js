import "./ProfileComponent.css"

const ProfileComponent = ({item}) => {

    const {id, name, link} = item

    return (
        <button className="profile-component">
            <a id={id} href={link}>{name}</a>
        </button>
    )
}
export default ProfileComponent