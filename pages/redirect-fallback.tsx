// pages/redirect-fallback.tsx
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function RedirectFallback() {
  const [countdown, setCountdown] = useState(5);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRedirectUrl = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const type = urlParams.get('type');

      if (type) {
        try {
          const response = await fetch(`/api/redirect?type=${type}`);
          if (response.ok) {
            const data = await response.json();
            console.log(data)
            if (data.redirectUrl && isValidUrl(data.redirectUrl)) {
              setRedirectUrl(data.redirectUrl);
            } else {
              setError('Invalid redirect URL');
            }
          } else {
            setError('Failed to fetch redirect URL');
          }
        } catch (error) {
          setError('Error fetching redirect URL');
        }
      }
    };

    fetchRedirectUrl();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (redirectUrl) {
            window.location.href = redirectUrl; // Redirect using window.location.href
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [redirectUrl]);

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-4">
          {error ? (
            <p className="text-lg text-red-500">{error}</p>
          ) : (
            <>
              <img
                src="https://cdn-sdotid.adg.id/images/ca3a0911-29ce-42f5-b287-195114b3b950_547x547.png"
                alt="Redirecting"
                className="mb-4" // Add margin-bottom for spacing
                width={547} // Adjust the width as needed
                height={547} // Adjust the height as needed
              />
              <h1 className="text-xl font-bold" style={{ color: '#FFA500', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'}}>Page Redirecting...</h1>
              <p className="text-lg" style={{ color: '#FFA500', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'}}>You will be redirected to the page in {countdown} seconds.</p>
            </>
          )}
        </div>
      </div>
  );
}
