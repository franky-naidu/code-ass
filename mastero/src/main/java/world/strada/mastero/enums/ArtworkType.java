package world.strada.mastero.enums;

public enum ArtworkType {
    CONTENT("content"),
    ART("art");

    private final String value;

    ArtworkType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
