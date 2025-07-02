package com.Placement.Placements.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Entity
@Data
@Table(name = "studentDocStorage")
public class StudentDocStorage {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String filename;
        private String fileType;

        @Lob
        private byte[] data;

//        // Constructors
//        public StudentDocStorage() {}
//
//        public StudentDocStorage(String fileName, byte[] data) {
//            this.fileName = fileName;
//            this.data = data;
//        }

//    @Id
//    @GeneratedValue (strategy = GenerationType.AUTO)
//    private Long id;
//
//
//    @Lob
//    @Column(name = "photo")
//    private byte[] photo;
//
//    @Lob
//    @Column(name = "aadhar pdf")
//    private byte[] aadharPdf;
//
//    @Lob
//    @Column(name = "pan card")
//    private byte[] pancardPdf;
//
//    @Lob
//    @Column(name = "10 marksheet")
//    private byte[] tenthMarksheet;
//
//    @Lob
//    @Column(name = "12 marksheet")
//    private byte[] twelfthMarksheet;
//
//    @Lob
//    @Column(name = "UG marksheet")
//    private byte[] UgMarksheet;


//    // Optional: For dynamic document upload
//    @ElementCollection
//    @CollectionTable(name = "Student_extra_documents", joinColumns = @JoinColumn(name = "document_id"))
//    @MapKeyColumn(name = "doc_name")
//    @Column(name = "file_data")
//    private Map<String, byte[]> dynamicDocs = new HashMap<>();



    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "email", referencedColumnName = "email")
    private StudentPersonalDetails studentPersonalDetails;
}
