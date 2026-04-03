// Initialize the Supabase Client
const supabaseUrl = 'https://bqynvgyeovvstlohignu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxeW52Z3llb3Z2c3Rsb2hpZ251Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMjM4MTMsImV4cCI6MjA5MDc5OTgxM30.cEQFrl3fzvtlvmVZ0r6QzFszarvCjtyT6JLt683RRGg';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Link the HTML form to this script
const contactForm = document.getElementById('contactForm');

// ONLY run the code if the form actually exists on the page
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 

        const userName = document.getElementById('name').value;
        const userEmail = document.getElementById('email').value;
        const userMessage = document.getElementById('message').value;

        const { data, error } = await _supabase
            .from('contact_submissions') 
            .insert([
                { name: userName, email: userEmail, message: userMessage }
            ]);

        if (error) {
            console.error('Error:', error);
            alert('There was an error sending your message.');
        } else {
            alert('Success! Your message is now in the Supabase database.');
            contactForm.reset();
        }
    });
}
