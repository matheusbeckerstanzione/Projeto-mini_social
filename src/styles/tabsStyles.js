// ========================================
// src/styles/tabsStyles.js
// Estilos 100% separados para todas as Telas do Lived
// Cores atualizadas conforme solicitado:
// - Botões gerais: #068CD4
// - Cadastrar: #000000
// - Stories: Linear Gradient [#068CD4, #8B5CF6]
// - Comentário: #2563EB
// - Curtida: #F43F5E
// - Pesquisar: #068CD4
// - Postar comentário: #068CD4
// - Editar perfil: #0D9488
// ========================================
import { StyleSheet, Platform } from 'react-native';
import COLORS from '../constants/colors';

export const tabsStyles = StyleSheet.create({
  // ========================================
  // Estrutura Geral
  // ========================================
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    paddingBottom: 24,
  },

  // ========================================
  // 1. TELA DE FEED (Screen 1)
  // ========================================
  feedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 6 : 14,
    paddingBottom: 10,
    backgroundColor: COLORS.white,
  },
  feedHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchIconButton: {
    padding: 4,
  },
  searchPillInput: {
    width: 120,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 12,
    fontSize: 12,
    color: '#334155',
  },

  // Stories com LinearGradient (#068CD4 e #8B5CF6)
  storiesContainer: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  storyCircleWrapper: {
    alignItems: 'center',
  },
  storyGradientRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    padding: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyInnerCircle: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    backgroundColor: COLORS.white,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  storyAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: 28,
  },

  // Cards do Feed
  feedCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardUserRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cardAuthorName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  cardTimeText: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 1,
  },
  cardMenuButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  cardBodyText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#1E293B',
    marginBottom: 12,
  },
  cardImageContainer: {
    width: '100%',
    height: 185,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#F1F5F9',
    marginBottom: 12,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  cardActionsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  cardActionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardActionTextLike: {
    fontSize: 13,
    fontWeight: '700',
    color: '#F43F5E', // Curtida #F43F5E
  },
  cardActionTextComment: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563EB', // Comentário #2563EB
  },

  // ========================================
  // 2. TELA DE PUBLICAÇÃO / DETALHE (Screen 2)
  // ========================================
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 6 : 14,
    paddingBottom: 14,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  detailHeaderButton: {
    padding: 6,
  },
  detailHeaderTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0F172A',
  },
  detailScroll: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  commentsSectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 14,
  },
  commentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 20,
  },
  commentAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  commentContent: {
    flex: 1,
  },
  commentHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 3,
  },
  commentAuthor: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F172A',
  },
  commentTime: {
    fontSize: 11,
    color: '#94A3B8',
  },
  commentBody: {
    fontSize: 13,
    color: '#334155',
    lineHeight: 18,
  },
  detailPostCard: {
    backgroundColor: COLORS.white,
    marginTop: 8,
  },
  detailPostHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  detailPostAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  detailPostAuthor: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  detailPostTime: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 2,
  },
  detailPostText: {
    fontSize: 13,
    color: '#1E293B',
    lineHeight: 19,
    marginBottom: 12,
  },
  detailPostImageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#F1F5F9',
    marginBottom: 12,
  },
  detailPostImage: {
    width: '100%',
    height: '100%',
  },

  // Input de Comentário e Botão de Postar (#068CD4)
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  commentInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 8 : 4,
  },
  commentTextInput: {
    flex: 1,
    fontSize: 13,
    color: '#0F172A',
  },
  commentSendButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#068CD4', // Postar comentário #068CD4
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },

  // ========================================
  // 3. TELA DE NOVA PUBLICAÇÃO (Screen 3)
  // ========================================
  createHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 6 : 14,
    paddingBottom: 14,
    backgroundColor: COLORS.white,
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  createCloseButton: {
    position: 'absolute',
    left: 16,
    padding: 4,
  },
  createHeaderTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0F172A',
  },
  createBody: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  createPromptText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 14,
  },
  createTextAreaContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 16,
    minHeight: 240,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  createTextInput: {
    fontSize: 14,
    color: '#0F172A',
    minHeight: 180,
    textAlignVertical: 'top',
  },
  createCounterText: {
    textAlign: 'right',
    fontSize: 12,
    color: '#94A3B8',
  },
  createTagsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 24,
  },
  tagPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
  },
  tagPillActive: {
    backgroundColor: '#EFF6FF',
    borderColor: '#068CD4',
  },
  tagPillText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
  },
  tagPillTextActive: {
    color: '#068CD4',
    fontWeight: '700',
  },
  publishLargeButton: {
    backgroundColor: '#068CD4', // Botão de publicar #068CD4
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#068CD4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  publishLargeButtonText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '700',
  },

  // ========================================
  // 4. TELA DE PERFIL (Késsia Milena)
  // ========================================
  profileHeaderNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 6 : 14,
    paddingBottom: 14,
    backgroundColor: COLORS.white,
  },
  profileHeaderNavTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0F172A',
  },
  profileHeaderIconButton: {
    padding: 6,
  },
  profileTopSection: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
  profileAvatarContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  profileMainAvatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  profileEditBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#0D9488', // Editar perfil #0D9488
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.3,
  },
  profileHandle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 3,
    marginBottom: 16,
  },
  profileStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 18,
  },
  profileStatBox: {
    alignItems: 'center',
    flex: 1,
  },
  profileStatVal: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0F172A',
  },
  profileStatLbl: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 2,
    fontWeight: '500',
  },
  profileBioBlock: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  profileBioLine: {
    fontSize: 13,
    color: '#334155',
    textAlign: 'center',
    lineHeight: 18,
  },
  profileTabsRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    backgroundColor: COLORS.white,
  },
  profileTabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    position: 'relative',
  },
  profileTabActiveIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#0D9488', // Editar perfil #0D9488
  },
  profilePhotosGrid: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingTop: 12,
    gap: 8,
  },
  profilePhotoCard: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F1F5F9',
  },
  profilePhotoThumb: {
    width: '100%',
    height: '100%',
  },

  // ========================================
  // 5. TELA DE EDITAR PERFIL (#0D9488)
  // ========================================
  editHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 6 : 14,
    paddingBottom: 14,
    backgroundColor: COLORS.white,
    gap: 14,
  },
  editBackButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editHeaderTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
  },
  editAvatarSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  editAvatarWrapper: {
    position: 'relative',
  },
  editAvatarImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  editAvatarBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#0D9488', // Editar perfil #0D9488
    borderWidth: 2,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editFormContainer: {
    paddingHorizontal: 20,
  },
  editFieldGroup: {
    marginBottom: 18,
  },
  editFieldLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#0D9488', // Label #0D9488
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  editInput: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: '#0F172A',
  },
  editTextArea: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: '#0F172A',
    minHeight: 70,
    textAlignVertical: 'top',
  },
  editSaveButton: {
    backgroundColor: '#0D9488', // Salvar alterações #0D9488
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#0D9488',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  editSaveButtonText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '700',
  },

  // ========================================
  // 6. TELA DE NOTIFICAÇÕES
  // ========================================
  notifHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 8 : 16,
    paddingBottom: 16,
    backgroundColor: COLORS.white,
  },
  notifHeaderTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
  },
  notifList: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  notifCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
    gap: 14,
  },
  notifBadgeCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifBadgeHeartBg: {
    backgroundColor: '#FEE2E2',
  },
  notifBadgeCommentBg: {
    backgroundColor: '#E0F2FE',
  },
  notifBadgeFollowBg: {
    backgroundColor: '#E0F2FE',
  },
  notifTextContainer: {
    flex: 1,
  },
  notifMessage: {
    fontSize: 13,
    color: '#334155',
    lineHeight: 18,
  },
  notifUserName: {
    fontWeight: '700',
    color: '#0F172A',
  },
  notifTimestamp: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 2,
  },

  // ========================================
  // BARRA DE TABS INFERIOR (4 abas)
  // ========================================
  tabBarWrapper: {
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 56,
    paddingHorizontal: 8,
    paddingBottom: Platform.OS === 'ios' ? 0 : 4,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#94A3B8',
  },
  tabLabelActive: {
    color: '#068CD4', // Aba ativa #068CD4
    fontWeight: '700',
  },
});

export default tabsStyles;
