export default function ReportBugPage() {
    return (
        <div>
            <h1>Report a Bug</h1>
            <p>If you encounter any issues, please let us know by filling out the form below.</p>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="description">Bug Description:</label>
                    <textarea id="description" name="description" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}