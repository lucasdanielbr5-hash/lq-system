/* Configuração pública do navegador. Nunca coloque service_role ou senhas neste arquivo. */
window.LEGADO_CONFIG = Object.freeze({
  "SUPABASE_URL": "https://teujmiojdyytzpavritf.supabase.co",
  "SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRldWptaW9qZHl5dHpwYXZyaXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc5NTYxMjUsImV4cCI6MjEwMzUzMjEyNX0.rGLzx-B1bdrlcaa9a_gAOHrDv52UGHQfg-dquLJtyIk",
  "TABLES": {
    "profiles": "profiles",
    "students": "students",
    "studentContext": "student_context",
    "appointments": "appointments",
    "evaluations": "evaluations",
    "records": "student_records",
    "progress": "student_progress",
    "finance": "financial_entries",
    "payments": "payments",
    "waitlist": "waitlist",
    "contacts": "student_contacts",
    "settings": "platform_settings"
  },
  "FIELD_CANDIDATES": {
    "studentName": [
      "name",
      "full_name",
      "student_name"
    ],
    "birthDate": [
      "birth_date",
      "date_of_birth",
      "birthday"
    ],
    "appointmentDate": [
      "appointment_date",
      "date",
      "scheduled_for"
    ],
    "appointmentTime": [
      "appointment_time",
      "time",
      "start_time"
    ],
    "financialDate": [
      "competence_date",
      "due_date",
      "entry_date",
      "created_at"
    ],
    "profileName": [
      "full_name",
      "name",
      "display_name"
    ]
  }
});
