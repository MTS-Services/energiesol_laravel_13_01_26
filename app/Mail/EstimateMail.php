<?php

namespace App\Mail;


use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Support\Facades\Log;

class EstimateMail extends Mailable
{


    public string $url;
    /**
     * Create a new message instance.
     */
    public function __construct(string $url)
    {
        $this->url = $url;
        Log::info('EstimateMail constructor called');
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Kostenvoranschlagsdetails von Energiesol',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.estimate_mail',
            with: [
                'url' => $this->url,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
