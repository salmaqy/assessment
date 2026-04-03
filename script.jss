// Initialize the Supabase Client
const supabaseUrl = 'YOUR_SUPABASE_URL_HERE';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY_HERE';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Link the HTML form to this script
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Stops the page from refreshing

    // Get data from the HTML inputs
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const userMessage = document.getElementById('message').value;

    // Send data to the Supabase table
    const { data, error } = await _supabase
        .from('contact_submissions') // Must match your Table Name exactly
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
