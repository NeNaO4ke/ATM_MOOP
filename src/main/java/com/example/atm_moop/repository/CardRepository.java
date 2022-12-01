package com.example.atm_moop.repository;

import com.example.atm_moop.domain.Card;
import com.example.atm_moop.domain.enums.CARD_STATUS;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional(readOnly = true)
public interface CardRepository extends JpaRepository<Card, String> {

    @Transactional
    @Modifying
    @Query("update Card c set c.cardStatus = ?1 where c.number = ?2")
    int updateCardStatusByNumber(CARD_STATUS cardStatus, String number);

    @EntityGraph(attributePaths = {"user", "bank"}, type = EntityGraph.EntityGraphType.LOAD)
    @Query("select c from Card c where c.number = ?1")
    Optional<Card> findCardBankUserDetails(String number);

    @Transactional
    @Modifying
    @Query("update Card c set c.pin = ?1 where c.number = ?2")
    void updatePinByNumber(String pin, String number);

    @EntityGraph(attributePaths = {"bank"}, type = EntityGraph.EntityGraphType.FETCH)
    @Query("select c from Card c where c.number = ?1")
    Optional<Card> findCardWithBankByID(String number);
}
