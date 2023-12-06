import React from 'react';

interface UploadButtonProps {
  onUpload: (result: any, widget: any) => void;
  uploadPreset: string;
  className?: string;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onUpload, uploadPreset, className }) => {
  const handleUpload = () => {
    // Lógica de upload aqui...

    // Suponhamos que o 'result' e o 'widget' são retornados após o upload bem-sucedido
    const result = /* resultado do upload */;
    const widget = /* objeto do widget ou outro resultado */;
    
    // Executar a função de manipulação do upload fornecida por 'onUpload'
    onUpload(result, widget);
  };

  return (
    <button className={className} onClick={handleUpload}>
      Upload
    </button>
  );
};

export default UploadButton;
