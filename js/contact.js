// ==========================================================================
// TEKLİF ALMA FORMU YÖNETİMİ — FORMSPREE ASYNC GÖNDERİM
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const proposalForm = document.getElementById('proposalForm');
    const formSuccessMessage = document.getElementById('formSuccessMessage');
    const btnSubmit = document.getElementById('btnSubmitForm');

    if (!proposalForm) return;

    proposalForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            id: 'TKF-2026-' + Math.floor(1000 + Math.random() * 9000),
            createdAt: new Date().toISOString(),
            customerName: document.getElementById('customerName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            eventType: document.getElementById('eventType').value,
            eventDate: document.getElementById('eventDate').value || 'Belirtilmedi',
            hologramSize: document.getElementById('hologramSize').value,
            eventLocation: document.getElementById('eventLocation').value,
            eventDuration: document.getElementById('eventDuration').value,
            notes: document.getElementById('notes').value,
            status: 'Beklemede'
        };

        // Fütüristik yükleniyor durumu
        btnSubmit.disabled = true;
        btnSubmit.textContent = '◈ GÖNDERİLİYOR...';
        btnSubmit.style.opacity = '0.7';

        try {
            const response = await fetch(proposalForm.action, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Formu temizle ve başarı ekranını göster
                proposalForm.reset();
                proposalForm.style.display = 'none';
                formSuccessMessage.style.display = 'block';
                console.log('✅ Formspree gönderimi başarılı:', formData.id);
            } else {
                throw new Error('Sunucu yanıtı başarısız: ' + response.status);
            }
        } catch (err) {
            console.error('Gönderim hatası:', err);
            btnSubmit.disabled = false;
            btnSubmit.textContent = '⚠ TEKRAR DENE';
            btnSubmit.style.opacity = '1';
        }
    });
});
