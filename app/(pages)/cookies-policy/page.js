import classes from './page.module.css'

export default function CookiesPolicy() {
    return (
        <div className={classes.page}>
            <div className={classes.wrapper}>
                <h1>Cookie Policy for PapaBuild.com</h1>
                <p>Last Updated: 05.03.2025</p>
                <p>Welcome to PapaBuild.com ("we", "our", "us"). This Cookie Policy explains how we use cookies and similar tracking technologies on our website.</p>
            </div>
            <div className={classes.wrapper}>
                <h2>1. What Are Cookies?</h2>
                <p>Cookies are small text files that are placed on your device when you visit a website. They help us enhance your user experience by remembering preferences, analyzing traffic, and improving website functionality.</p>
            </div>
            <div className={classes.wrapper}>
                <h2>2. What Cookies Do We Use?</h2>
                <p>We use only essential and analytical cookies to improve our website's performance. Specifically, we use cookies from Google Analytics to gather anonymized statistical data about how visitors interact with our website.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Cookie Name</th>
                            <th>Purpose</th>
                            <th>Expiration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>_ga</td>
                            <td>Used to distinguish users</td>
                            <td>2 years</td>
                        </tr>
                        <tr>
                            <td>_gid</td>
                            <td>Used to distinguish users</td>
                            <td>24 hours</td>
                        </tr>
                        <tr>
                            <td>_gat</td>
                            <td>Used to limit requests</td>
                            <td>1 minute</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className={classes.wrapper}>
                <h2>3. How We Use Cookies</h2>
                <p>We use cookies strictly for website performance analysis and improvement. No data collected via cookies is shared with third parties or used for advertising purposes.</p>
            </div>
            <div className={classes.wrapper}>
                <h2>4. Managing Cookies</h2>
                <p>You can manage or disable cookies through your browser settings. However, please note that disabling certain cookies may affect website functionality.</p>
            </div>
            <div className={classes.wrapper}>
                <h2>5. Contact Information</h2>
                <p>If you have any questions regarding this Cookie Policy, you can contact us:</p>
                <p>Email: rmigunov1@gmail.com</p>
            </div>
            <div className={classes.wrapper}>
                <p>By continuing to use PapaBuild.com, you agree to our use of cookies as described in this policy.</p>
            </div>
        </div>
    );
} 