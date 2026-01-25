import { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';

function Calendly() {

    const payload = {
  "event": "calendly.event_scheduled",
  "payload": {
    "event": {
      "uri": "https://api.calendly.com/scheduled_events/ABC123",
      "name": "30 Minute Meeting",
      "status": "active",
      "start_time": "2026-01-25T10:00:00+06:00",
      "end_time": "2026-01-25T10:30:00+06:00",
      "event_type": "https://api.calendly.com/event_types/XYZ456"
    },
    "invitee": {
      "uri": "https://api.calendly.com/scheduled_events/ABC123/invitees/INV789",
      "name": "John Doe",
      "email": "john@example.com",
      "timezone": "Asia/Dhaka",
      "created_at": "2026-01-25T09:55:00+06:00"
    }
  }
}; 
    useEffect(() => {
    function handleMessage(e) {
      if (e.data.event === "calendly.event_scheduled") {
        console.log("Booking Data:", e.data.payload);

        // Example: Send to your backend
        fetch("/api/save-booking", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e.data.payload),
        });
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

return (
<InlineWidget url="https://calendly.com/xmonirislam75/30min?month=2026-01"   styles={{ height: "100vh"  , width:"100%"}} />
);
}

export {Calendly}