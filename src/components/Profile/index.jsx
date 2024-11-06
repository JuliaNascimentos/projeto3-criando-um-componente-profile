import styles from './styles.module.css'

export default function Profile(props){
    return(
        <div className={styles.container}>
            <img src={props.img} />
            <h3>{props.name}</h3>
            <hr />
            <p>{props.bio}</p>
            <hr />
            <p>{props.phone}</p>
            <hr />
            <p>{props.email}</p>
            <hr />
            <button><a href={props.githubUrl}>Github</a></button>
            <button><a href={props.linkedinUrl}>Linkedin</a></button>
            <button><a href={props.instaUrl}>Instagram</a></button>
        </div>
    )
}
