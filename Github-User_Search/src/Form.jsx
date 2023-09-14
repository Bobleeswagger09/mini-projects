const Form = ({ onChange, onSubmit, value }) => {
    return (
        <form onSubmit={onSubmit} className="search-form">
            <input 
                type="text"
                id="search"
                placeholder="enter your username or email"
                onChange={onChange}
                value={value}
            />
            <button type="submit">Add</button>
        </form>
    );
}
 
export default Form;