/*
  # Create Citizen Complaints Table

  1. New Tables
    - `citizen_complaints`
      - `id` (uuid, primary key)
      - `full_name` (text) - Name of the person filing the complaint
      - `email` (text) - Email address for contact
      - `phone` (text) - Phone number for contact
      - `complaint_details` (text) - Details of the complaint
      - `created_at` (timestamptz) - Timestamp when complaint was submitted
      - `status` (text) - Status of the complaint (default: 'pending')

  2. Security
    - Enable RLS on `citizen_complaints` table
    - Add policy for anonymous users to insert complaints (public submission)
    - No select policies (complaints are private, only admin access needed)
*/

CREATE TABLE IF NOT EXISTS citizen_complaints (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  complaint_details text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE citizen_complaints ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit complaints"
  ON citizen_complaints
  FOR INSERT
  TO anon
  WITH CHECK (true);