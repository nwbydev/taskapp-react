export const translateStatus = (status) => {
  const map = {
    PENDING: 'PENDIENTE',
    IN_PROGRESS: 'EN PROGRESO',
    COMPLETED: 'COMPLETADO',
  };
  return map[status] || status;
};

export const translatePriority = (priority) => {
  const map = {
    LOW: 'BAJA',
    MEDIUM: 'MEDIA',
    HIGH: 'ALTA',
  };
  return map[priority] || priority;
};

export const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);
  return new Intl.DateTimeFormat('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};
