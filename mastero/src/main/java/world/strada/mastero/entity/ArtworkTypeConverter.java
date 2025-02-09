package world.strada.mastero.entity;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import world.strada.mastero.enums.ArtworkType;

@Converter(autoApply = true)
public class ArtworkTypeConverter implements AttributeConverter<ArtworkType, String> {

    @Override
    public String convertToDatabaseColumn(ArtworkType artworkType) {
        return artworkType == null ? null : artworkType.getValue();
    }

    @Override
    public ArtworkType convertToEntityAttribute(String dbData) {
        if (dbData == null) {
            return null;
        }
        for (ArtworkType type : ArtworkType.values()) {
            if (type.getValue().equals(dbData)) {
                return type;
            }
        }
        throw new IllegalArgumentException("Unknown artwork type: " + dbData);
    }
}