export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            email:"",
            password:"",
            confirmPassword:"",
            newsletter:true
        }
    )
    function handleChange(event){
        const {name, type, value, checked} = event.target
        setFormData(prevData => {
            return {
                email: prevData.email,
                password: prevData.password,
                confirmPassword: prevData.confirmPassword,
                newsletter: prevData.newsletter,
                [name]: type==="checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        if(formData.email && formData.password && formData.confirmPassword) {
            if (formData.password===formData.confirmPassword) {
                console.log("Successfully signed up");
                formData.newsletter && console.log("Thanks for signingup for our newsletter!")
            } else {console.log("passwords to not match")}
        } else {
            console.log("Please complete the form")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                className="text-input"
                type="text"
                name="email"
                placeholder="Type email address"
                value={formData.email} 
                onChange={handleChange}
            />
            <input 
                className="text-input"
                type="text"
                name="password"
                placeholder="Password"
                value={formData.password} 
                onChange={handleChange}
            />
            <input 
                className="text-input"
                type="text"
                name="confirmPassword"
                placeholder="Confirm Password" 
                value={formData.confirmPassword}
                onChange={handleChange}
            />
            <div>
                <input 
                    id="newsletter" 
                    type="checkbox"
                    name="newsletter" 
                    checked={formData.newsletter}
                    onChange={handleChange}
                />
                <label htmlFor="newsletter">I want to join the newsletter</label>
            </div>
            <button>Sign up</button>
        </form>
    )
}