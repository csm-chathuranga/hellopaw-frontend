import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { create } from "../../services/PetOwner"; // Your service function

const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuthResponse = async () => {
      const query = new URLSearchParams(window.location.search);
      const credential = query.get('credential');

      if (credential) {
        try {
          const decoded = jwtDecode(credential);
          const { email, given_name, family_name } = decoded;

          // Prepare the user data
          const data = {
            name: `${given_name} ${family_name}`,
            email: email,
            password: `${email}google_auth`, // Generate a dummy password
            type: 'google_auth',
          };

          // Send data to your backend
          const res = await create(data);

          if (res && res.status === 200) {
            alert('Registration successful!');
            navigate('/'); // Redirect to home or any desired page
          } else {
            alert('Registration completed, but response format was unexpected.');
          }
        } catch (error) {
          console.error('Error during registration:', error);
          alert('Registration failed: ' + (error?.response?.data?.message || 'Unknown error'));
        }
      } else {
        alert('No credential found in the URL.');
        navigate('/register'); // Redirect to the registration page if needed
      }
    };

    handleOAuthResponse();
  }, [navigate]);

  return (
    <div>
      <h2>Processing Google OAuth...</h2>
      {/* Optionally add a loading spinner or message */}
    </div>
  );
};

export default OAuthCallback;
